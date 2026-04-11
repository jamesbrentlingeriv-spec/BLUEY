// Shared script for all Bluey story pages - make every word clickable, read-aloud with friendly voice
function initStoryPhonics() {
  const synth = window.speechSynthesis;
  let voices = [];
  function populateVoices() {
    voices = synth
      .getVoices()
      .filter(
        (v) =>
          v.lang.startsWith("en") &&
          (v.name.toLowerCase().includes("female") ||
            v.name.toLowerCase().includes("zira") ||
            v.name.toLowerCase().includes("samantha") ||
            v.name.toLowerCase().includes("girl")),
      );
    if (voices.length === 0)
      voices = synth.getVoices().filter((v) => v.lang.startsWith("en"));
  }
  synth.onvoiceschanged = populateVoices;
  populateVoices();

  const storyText = document.getElementById("story-text");
  const slideshow = document.getElementById("slideshow");
  const phonicsBtn = document.getElementById("phonics-btn");
  const readAloudBtn = document.getElementById("read-aloud-btn");
  const stopBtn = document.getElementById("stop-btn");
  let slideshowInterval,
    isReading = false;

  // Wrap every text word in a clickable .word span
  function wrapWords() {
    const walker = document.createTreeWalker(
      storyText,
      NodeFilter.SHOW_TEXT,
      null,
      false,
    );
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      nodes.push(node);
    }
    nodes.forEach((node) => {
      const text = node.textContent;
      const parts = text.split(/(\w+)/g);
      const fragment = document.createDocumentFragment();
      parts.forEach((part) => {
        if (part.match(/^\w+$/)) {
          const span = document.createElement("span");
          span.className = "word";
          span.dataset.text = part;
          span.textContent = part;
          fragment.appendChild(span);
        } else {
          fragment.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(fragment, node);
    });
  }
  wrapWords();

  const images = slideshow.dataset.images
    ? JSON.parse(slideshow.dataset.images)
    : ["🐶", "🐕"];
  let imgIndex = 0;
  slideshowInterval = setInterval(() => {
    slideshow.textContent = images[imgIndex];
    imgIndex = (imgIndex + 1) % images.length;
  }, 4000);

  // Click any word to hear it spoken
  storyText.addEventListener("click", (e) => {
    const wordSpan = e.target.closest(".word");
    if (wordSpan) {
      wordSpan.style.background = "#5BA4CF";
      wordSpan.style.color = "#fff";
      setTimeout(() => {
        wordSpan.style.background = "";
        wordSpan.style.color = "";
      }, 600);
      const utterance = new SpeechSynthesisUtterance(wordSpan.dataset.text);
      utterance.voice = voices[0] || null;
      utterance.rate = 0.85;
      synth.speak(utterance);
    }
  });

  phonicsBtn.addEventListener("click", () => {
    storyText.style.cursor = "pointer";
    storyText
      .querySelectorAll(".word")
      .forEach((w) => (w.style.color = "#E76F51"));
    clearInterval(slideshowInterval);
  });

  readAloudBtn.addEventListener("click", () => {
    isReading = true;
    readAloudBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    const fullText = storyText.textContent;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.voice = voices[0] || null;
    utterance.rate = 0.75;
    utterance.onend = () => {
      isReading = false;
      readAloudBtn.style.display = "inline-block";
      stopBtn.style.display = "none";
    };
    synth.speak(utterance);
  });

  stopBtn.addEventListener("click", () => {
    synth.cancel();
    isReading = false;
    stopBtn.style.display = "none";
    readAloudBtn.style.display = "inline-block";
  });
}

initStoryPhonics();
