const video = document.getElementById("video");

/* Force play when ready */
video.addEventListener("loadeddata", () => {
  video.play().catch(() => {});
});

/* Tap once to enable sound (optional) */
document.addEventListener("click", () => {
  video.muted = false;
  video.play();
});
