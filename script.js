document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".imgContainer");
  if (!container) return;

  const slides = Array.from(container.querySelectorAll("img"));
  if (slides.length === 0) return;

  let current = 0;
  const intervalMs = 3000; // 3 seconds per image

  // Initialize: hide all and show the first
  slides.forEach((img, i) => {
    img.classList.remove("active");
    img.setAttribute("aria-hidden", "true");
  });
  slides[0].classList.add("active");
  slides[0].setAttribute("aria-hidden", "false");

  // Rotate
  setInterval(() => {
    slides[current].classList.remove("active");
    slides[current].setAttribute("aria-hidden", "true");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
    slides[current].setAttribute("aria-hidden", "false");
  }, intervalMs);
});
