// Bluey's Word Witness – Story page pagination + read-aloud with word highlighting
// --- Amazon Polly TTS Setup ---
// Insert your AWS credentials below
AWS.config.region = "us-east-1"; // e.g., us-east-1
AWS.config.credentials = new AWS.Credentials({
  accessKeyId: "AKIAWIHEAA6MWD2VZK55",
  secretAccessKey: "44QBbhjLbRakuLYsETJAB2kFdVphNm2F9S9adjPw",
});
const polly = new AWS.Polly();

function playPolly(text, voiceId = "Joanna", onEnd) {
  const params = {
    OutputFormat: "mp3",
    Text: text,
    VoiceId: voiceId, // e.g., Joanna, Ivy, Matthew, etc.
  };
  polly.synthesizeSpeech(params, function (err, data) {
    if (err) {
      alert("Polly error: " + err.message);
      if (onEnd) onEnd();
      return;
    }
    if (data && data.AudioStream instanceof Blob === false) {
      const uInt8Array = new Uint8Array(data.AudioStream);
      const arrayBuffer = uInt8Array.buffer;
      const blob = new Blob([arrayBuffer]);
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.onended = onEnd || null;
      audio.play();
    }
  });
}

(function () {
  const pages = document.querySelectorAll(".story-page");
  const dotsContainer = document.querySelector(".dots");
  const totalPages = pages.length;
  let current = 0;

  // Build dots only if container exists
  let dots = [];
  if (dotsContainer) {
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dotsContainer.appendChild(dot);
    }
    dots = dotsContainer.querySelectorAll(".dot");
  }

  function showPage(index) {
    pages.forEach((p) => p.classList.remove("active"));
    if (dots.length) dots.forEach((d) => d.classList.remove("active"));
    pages[index].classList.add("active");
    if (dots.length) dots[index].classList.add("active");

    const btnBack = document.querySelector(".btn-back");
    const btnNext = document.querySelector(".btn-next");
    if (btnBack) btnBack.disabled = index === 0;
    if (btnNext) btnNext.disabled = index === totalPages - 1;
  }

  window.changePage = function (dir) {
    const next = current + dir;
    if (next < 0 || next >= totalPages) return;
    current = next;
    showPage(current);
  };

  // ── Improved: Wrap every word and punctuation in its own <span class="word"> for accurate TTS highlighting ──
  function wrapWordsInPage(page) {
    const storyText = page.querySelector(".story-text");
    if (!storyText || storyText.dataset.wrapped) return;

    const walker = document.createTreeWalker(
      storyText,
      NodeFilter.SHOW_TEXT,
      null,
      false,
    );
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach(function (tNode) {
      // Split into words and punctuation, preserving spaces
      // e.g. "Hello, world!" => ["Hello", ",", " ", "world", "!"]
      const parts = tNode.textContent.match(/\w+|[^\w\s]|\s+/g);
      const fragment = document.createDocumentFragment();
      if (parts) {
        parts.forEach(function (part) {
          if (/\w+|[^\w\s]/.test(part)) {
            const span = document.createElement("span");
            span.className = "word";
            span.textContent = part;
            fragment.appendChild(span);
          } else {
            fragment.appendChild(document.createTextNode(part));
          }
        });
      }
      tNode.parentNode.replaceChild(fragment, tNode);
    });

    storyText.dataset.wrapped = "true";
  }

  // Wrap words on every page at startup
  pages.forEach(wrapWordsInPage);

  // ── Read aloud current page – prefer natural / neural voices ──
  const synth = window.speechSynthesis;
  let bestVoice = null;

  // Prefer American female voices for TTS
  function pickBest() {
    const all = synth.getVoices();
    // Prefer US English female voices
    let usFemales = all.filter(
      (v) =>
        v.lang === "en-US" &&
        /female|woman|samantha|karen|aria|jenny|zira|libby|hazel|fiona/i.test(
          v.name,
        ),
    );
    if (usFemales.length) {
      bestVoice = usFemales[0];
      return;
    }
    // Prefer Google US English
    let googleUS = all.find((v) =>
      v.name.toLowerCase().includes("google us english"),
    );
    if (googleUS) {
      bestVoice = googleUS;
      return;
    }
    // Fallback to any en-US voice
    let anyUS = all.find((v) => v.lang === "en-US");
    if (anyUS) {
      bestVoice = anyUS;
      return;
    }
    // Fallback to any English female
    let enFemales = all.filter(
      (v) =>
        v.lang.startsWith("en") &&
        /female|woman|samantha|karen|aria|jenny|zira|libby|hazel|fiona/i.test(
          v.name,
        ),
    );
    if (enFemales.length) {
      bestVoice = enFemales[0];
      return;
    }
    // Fallback to any English
    let anyEn = all.find((v) => v.lang.startsWith("en"));
    if (anyEn) {
      bestVoice = anyEn;
      return;
    }
    // Fallback to first available
    bestVoice = all[0] || null;
  }
  synth.onvoiceschanged = pickBest;
  pickBest();

  // ── Helper: clear all word highlights on all pages ──
  function clearHighlights() {
    document
      .querySelectorAll(".story-text .word.highlight")
      .forEach((w) => w.classList.remove("highlight"));
  }

  // ── Click any word to hear it spoken ──

  document.addEventListener("click", function (e) {
    const wordSpan = e.target.closest(".word");
    if (!wordSpan) return;

    // Strip punctuation for cleaner pronunciation
    const clean = wordSpan.textContent.replace(/[^a-zA-Z'-]/g, "");
    if (!clean) return;

    // Remove any previous letter highlights
    wordSpan
      .querySelectorAll(".letter-highlight")
      .forEach((l) => l.classList.remove("letter-highlight"));

    // Speak the word first using Polly
    wordSpan.classList.add("word-clicked");
    playPolly(clean, "Joanna", function () {
      wordSpan.classList.remove("word-clicked");
      // Now spell the word, highlighting each letter
      spellWordWithHighlight(wordSpan, clean);
    });
  });

  function spellWordWithHighlight(wordSpan, word) {
    // Remove any previous letter highlights
    wordSpan
      .querySelectorAll(".letter-highlight")
      .forEach((l) => l.classList.remove("letter-highlight"));

    // Wrap each letter in a span if not already
    if (!wordSpan.querySelector(".letter")) {
      const letters = word.split("");
      const frag = document.createDocumentFragment();
      for (let i = 0; i < letters.length; i++) {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = letters[i];
        frag.appendChild(span);
      }
      // Save any trailing punctuation
      const trailing = wordSpan.textContent.slice(word.length);
      wordSpan.innerHTML = "";
      wordSpan.appendChild(frag);
      if (trailing) wordSpan.appendChild(document.createTextNode(trailing));
    }

    const letterSpans = wordSpan.querySelectorAll(".letter");
    let idx = 0;

    function speakNextLetter() {
      // Remove highlight from all
      letterSpans.forEach((l) => l.classList.remove("letter-highlight"));
      if (idx >= letterSpans.length) return;
      const letter = letterSpans[idx].textContent;
      letterSpans[idx].classList.add("letter-highlight");
      playPolly(letter, "Joanna", function () {
        letterSpans[idx].classList.remove("letter-highlight");
        idx++;
        speakNextLetter();
      });
    }
    speakNextLetter();
  }

  // ── Read-aloud bar with word-level highlighting for all story pages ──
  // Letter highlight style
  const style = document.createElement("style");
  style.textContent = `.letter-highlight { background: #5ba4cf !important; color: #fff !important; border-radius: 2px; }`;
  document.head.appendChild(style);
  const bars = document.querySelectorAll(".read-aloud-bar");
  bars.forEach(function (bar, pageIdx) {
    const readBtn = bar.querySelector(".read-aloud-btn");
    if (!readBtn) return;
    let audio = null;
    readBtn.addEventListener("click", function () {
      if (readBtn.classList.contains("stop-btn")) {
        synth.cancel();
        clearHighlights();
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
        readBtn.innerHTML = '<i class="fas fa-volume-up"></i> Read Aloud';
        readBtn.classList.remove("stop-btn");
        return;
      }

      // Always use the .story-text for the page this bar is in
      const page =
        bars.length === pages.length ? pages[pageIdx] : pages[current];
      const storyTextEl = page.querySelector(".story-text");
      const wordSpans = Array.from(storyTextEl.querySelectorAll(".word"));
      const fullText = storyTextEl.textContent;

      // Camping story: play MP3 for each page if available
      const isCamping = document.title.toLowerCase().includes("camping");
      const isBeach = document.title.toLowerCase().includes("beach");
      if ((isCamping || isBeach) && page.dataset.page) {
        const pageNum = page.dataset.page;
        let mp3 = null;
        if (isCamping) {
          mp3 = `../../storyaudio/camping/bc${pageNum}.mp3`;
        } else if (isBeach) {
          mp3 = `../../storyaudio/beach/bb${pageNum}.mp3`;
        }
        if (mp3) {
          if (audio) {
            audio.pause();
            audio.currentTime = 0;
          }
          audio = new Audio(mp3);
          audio.play();
          readBtn.innerHTML = '<i class="fas fa-stop"></i> Stop';
          readBtn.classList.add("stop-btn");
          audio.onended = function () {
            readBtn.innerHTML = '<i class="fas fa-volume-up"></i> Read Aloud';
            readBtn.classList.remove("stop-btn");
          };
          return;
        }
      }

      // Default: Use Amazon Polly for TTS
      playPolly(fullText, "Joanna", function () {
        clearHighlights();
        readBtn.innerHTML = '<i class="fas fa-volume-up"></i> Read Aloud';
        readBtn.classList.remove("stop-btn");
      });
      readBtn.innerHTML = '<i class="fas fa-stop"></i> Stop';
      readBtn.classList.add("stop-btn");
    });
  });

  showPage(0);
})();
