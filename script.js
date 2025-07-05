
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

// Cart and Wishlist Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function updateFloatingCounts() {
  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("wishlist-count").textContent = wishlist.length;
}

document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const product = {
      title: card.querySelector("h3").innerText,
      price: card.querySelector("p").innerText,
      img: card.querySelector("img").src
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateFloatingCounts();
    alert("Added to cart");
  });
});

document.querySelectorAll(".add-wishlist").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const product = {
      title: card.querySelector("h3").innerText,
      price: card.querySelector("p").innerText,
      img: card.querySelector("img").src
    };
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateFloatingCounts();
    alert("Added to wishlist");
  });
});

// Floating Icons
const cartIcon = document.createElement('div');
cartIcon.className = 'floating-cart';
cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> <span id="cart-count">${cart.length}</span>`;
document.body.appendChild(cartIcon);

const wishlistIcon = document.createElement('div');
wishlistIcon.className = 'floating-wishlist';
wishlistIcon.innerHTML = `<i class="fas fa-heart"></i> <span id="wishlist-count">${wishlist.length}</span>`;
document.body.appendChild(wishlistIcon);

// CSS styles injected for floating icons
const style = document.createElement('style');
style.innerHTML = `
  .floating-cart, .floating-wishlist {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: #1e1e2f;
    color: white;
    padding: 10px 12px;
    border-radius: 50px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 1000;
  }
  .floating-wishlist {
    bottom: 130px;
    background: #cf6b4d;
  }
`;
document.head.appendChild(style);

updateFloatingCounts();
