// Filter Logic
const filterSelect = document.getElementById("categoryFilter");
filterSelect.addEventListener("change", (e) => {
  const category = e.target.value;
  document.querySelectorAll(".product-card").forEach(card => {
    card.style.display = (category === "all" || card.dataset.category === category) ? "block" : "none";
  });
});

// Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Initial slide display
showSlide(currentSlide);

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  loader.style.display = "none";
  content.style.display = "block";
});
