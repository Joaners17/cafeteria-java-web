let cart = [];

// Cambiar entre secciones (SPA)
function showSection(sectionId) {
    const home = document.getElementById('home-section');
    const menu = document.getElementById('menu-section');

    if (sectionId === 'home') {
        home.style.display = 'block';
        menu.style.display = 'none';
    } else {
        home.style.display = 'none';
        menu.style.display = 'block';
        loadProducts(); // Cargar productos de la DB al entrar al menú
    }
}

// Cargar productos desde el Backend
async function loadProducts() {
    try {
        const res = await fetch('/api/productos');
        const products = await res.json();
        const grid = document.getElementById('productos-grid');

        grid.innerHTML = products.map(p => `
            <div class="card">
                <img src="${p.imagenUrl || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=300'}" alt="${p.nombre}">
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <p class="price">₡${p.precio}</p>
                <button class="btn-add" onclick="addToCart('${p.nombre}', ${p.precio})">AGREGAR</button>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

// Lógica de la Mascota
function saludar() {
    const frases = [
        "¡Ese código se ve épico, Joan!",
        "¿Un café para compilar mejor?",
        "Protocolo Zenith Hub activo.",
        "¡Bienvenido al sistema, bro!"
    ];
    document.getElementById('speech').innerText = frases[Math.floor(Math.random() * frases.length)];
}

// Funciones del Carrito
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const itemsDiv = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');

    if (cart.length === 0) {
        itemsDiv.innerHTML = '<p>El carrito está vacío.</p>';
        totalSpan.innerText = '₡0';
        return;
    }

    let total = 0;
    itemsDiv.innerHTML = cart.map(item => {
        total += item.price;
        return `<div class="cart-item"><span>${item.name}</span> <span>₡${item.price}</span></div>`;
    }).join('');
    totalSpan.innerText = `₡${total}`;
}

function processOrder() {
    if (cart.length === 0) return alert("Agrega algo al carrito primero");
    document.getElementById('receipt').style.display = 'block';
    // Aquí puedes añadir la lógica para generar el código ZH-XXXX
    document.getElementById('receipt-code').innerText = `ZH-${Math.floor(Math.random() * 9000) + 1000}`;
}

function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }