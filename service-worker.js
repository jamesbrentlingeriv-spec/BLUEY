const CACHE_NAME = "bluey-pwa-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/story.css",
  "/story.js",
  "/shared-story-script.js",
  // Add more assets as needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});
