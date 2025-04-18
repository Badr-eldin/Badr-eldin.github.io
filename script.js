// Dynamic Product Loading
const products = [
    {
        name: "ساعة فاخرة",
        price: "٨٩٩ ر.س",
        image: "assets/images/watch.jpg",
        description: "ساعة ذكية بمواصفات عالية الجودة"
    },
    // Add more products...
];

function loadProducts() {
    const grid = document.querySelector('.products-grid');
    products.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <button class="cta-btn">اشتري الآن</button>
            </div>
        `;
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

// Language Switcher
const langSwitcher = document.createElement('div');
langSwitcher.className = 'lang-switcher';
langSwitcher.innerHTML = `
    <button onclick="changeLanguage('ar')">العربية</button>
    <button onclick="changeLanguage('en')">English</button>
`;
document.body.appendChild(langSwitcher);

function changeLanguage(lang) {
    // Implement language switching logic
}
