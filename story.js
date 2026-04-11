// Bluey's Word Witness – Story page pagination + read-aloud with word highlighting
(function () {
  const pages = document.querySelectorAll(".story-page");
  const dotsContainer = document.querySelector(".dots");
  const totalPages = pages.length;
  let current = 0;

  // Build dots
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll(".dot");

  function showPage(index) {
    pages.forEach((p) => p.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));
    pages[index].classList.add("active");
    dots[index].classList.add("active");

    document.querySelector(".btn-back").disabled = index === 0;
    document.querySelector(".btn-next").disabled = index === totalPages - 1;
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

  const PREFER = [
    "natural",
    "online",
    "google uk english female",
    "google us english",
    "samantha",
    "karen",
    "daniel",
    "moira",
  ];

  function pickBest() {
    const all = synth.getVoices();
    const english = all.filter((v) => v.lang.startsWith("en"));
    if (!english.length) return;

    for (const keyword of PREFER) {
      const match = english.find((v) => v.name.toLowerCase().includes(keyword));
      if (match) {
        bestVoice = match;
        return;
      }
    }
    bestVoice =
      english.find((v) =>
        /female|woman|fiona|hazel|libby|aria|jenny|zira/i.test(v.name),
      ) || english[0];
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

    wordSpan.classList.add("word-clicked");
    setTimeout(function () {
      wordSpan.classList.remove("word-clicked");
    }, 500);

    const utter = new SpeechSynthesisUtterance(clean);
    utter.voice = bestVoice;
    utter.rate = 0.85;
    utter.pitch = 1.05;
    synth.speak(utter);
  });

  // ── Read-aloud bar with word-level highlighting for all story pages ──
  const bars = document.querySelectorAll(".read-aloud-bar");
  bars.forEach(function (bar, pageIdx) {
    const readBtn = bar.querySelector(".read-aloud-btn");
    if (!readBtn) return;
    readBtn.addEventListener("click", function () {
      if (readBtn.classList.contains("stop-btn")) {
        synth.cancel();
        clearHighlights();
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

      // Build a map from character index → word span
      var searchFrom = 0;
      const wordPositions = wordSpans.map(function (span) {
        const word = span.textContent;
        const idx = fullText.indexOf(word, searchFrom);
        searchFrom = idx + word.length;
        return { start: idx, end: searchFrom, span: span };
      });

      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.voice = bestVoice;
      utterance.rate = 0.85;
      utterance.pitch = 1.05;

      // Highlight each word as it's spoken
      utterance.onboundary = function (event) {
        if (event.name === "word") {
          clearHighlights();
          const charIdx = event.charIndex;
          var match = wordPositions.find(function (wp) {
            return charIdx >= wp.start && charIdx < wp.end;
          });
          if (match) {
            match.span.classList.add("highlight");
          }
        }
      };

      utterance.onend = function () {
        clearHighlights();
        readBtn.innerHTML = '<i class="fas fa-volume-up"></i> Read Aloud';
        readBtn.classList.remove("stop-btn");
      };

      synth.speak(utterance);
      readBtn.innerHTML = '<i class="fas fa-stop"></i> Stop';
      readBtn.classList.add("stop-btn");
    });
  });

  showPage(0);
})();
