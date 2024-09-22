document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

function filterProducts(category) {
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    });
}

function scrollLeft() {
    const container = document.getElementById('productContainer');
    container.scrollBy({
        top: 0,
        left: -100, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.getElementById('productContainer');
    container.scrollBy({
        top: 0,
        left: 100, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
}