// Base de datos simulada de productos
const products = [
    {
        id: 1,
        title: "Smartwatch Ultra Pro",
        description: "Reloj inteligente con monitor de salud avanzado y resistencia al agua.",
        price: 299.00,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
        badge: "Más Vendido"
    },
    {
        id: 2,
        title: "Audífonos Inalámbricos ANC",
        description: "Cancelación activa de ruido y sonido espacial de alta fidelidad.",
        price: 199.00,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
        badge: "Nuevo"
    },
    {
        id: 3,
        title: "Cámara Mirrorless 4K",
        description: "Captura momentos inolvidables con calidad cinematográfica profesional.",
        price: 849.00,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80",
        badge: "Oferta"
    },
    {
        id: 4,
        title: "Mochila Ergonómica Tech",
        description: "Diseño antirrobo, puerto de carga USB integrado y compartimento acolchado.",
        price: 89.00,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
        badge: "Popular"
    }
];

let cartCount = 0;

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const cartCounter = document.getElementById('cartCounter');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const newsletterForm = document.getElementById('newsletterForm');

// Renderizar productos dinámicamente
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <span class="product-badge">${product.badge}</span>
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-content">
                <div>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.title}')" aria-label="Agregar ${product.title} al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Lógica de agregar al carrito
function addToCart(productName) {
    cartCount++;
    cartCounter.textContent = cartCount;
    showToast(`¡${productName} agregado al carrito!`);
}

// Mostrar notificación Toast
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Manejar suscripción al newsletter
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('¡Gracias por suscribirte a NovaStore!');
        newsletterForm.reset();
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
