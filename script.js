// ===== PRODUCT DATABASE =====
const products = [
    // CAMISAS
    {
        id: 1,
        name: "Camisa Brasil Home 2026",
        category: "camisas",
        price: 229.90,
        oldPrice: 299.90,
        description: "Camisa oficial do Brasil para Copa 2026",
        image: "img/brazil.jpg",
        size: ["P", "M", "G", "GG"],
        color: "Amarela com Verde",
        availability: 15,
        details: "Tecido técnico respirável, secagem rápida, proteção UV"
    },
    {
        id: 2,
        name: "Camisa Brasil Away 2026",
        category: "camisas",
        price: 229.90,
        oldPrice: 299.90,
        description: "Camisa oficial alternativa do Brasil",
        image: "img/brazilaway.jpg",
        size: ["P", "M", "G", "GG"],
        color: "Branca com Verde",
        availability: 12,
        details: "Design inovador, conforto máximo para treinos"
    },
    {
        id: 3,
        name: "Camisa Argentina Home 2026",
        category: "camisas",
        price: 229.90,
        oldPrice: 299.90,
        description: "Camisa oficial da Argentina",
        image: "img/argentinahome.jpg",
        size: ["P", "M", "G", "GG"],
        color: "Azul Celeste e Branca",
        availability: 10,
        details: "Tecnologia premium de performance"
    },
    {
        id: 4,
        name: "Camisa Alemanha Home 2026",
        category: "camisas",
        price: 229.90,
        oldPrice: 299.90,
        description: "Camisa oficial da Alemanha",
        image: "img/alemanha.jpg",
        size: ["P", "M", "G", "GG"],
        color: "Preta com Branco",
        availability: 8,
        details: "Ajuste anatômico, ideal para futebol"
    },
    {
        id: 5,
        name: "Camisa França Home 2026",
        category: "camisas",
        price: 229.90,
        oldPrice: 299.90,
        description: "Camisa oficial da França",
        image: "img/france.jpg",
        size: ["P", "M", "G", "GG"],
        color: "Azul Marinho",
        availability: 9,
        details: "Estilo clássico, qualidade internacional"
    },
    {
        id: 6,
        name: "Camisa Espanha Home 2026",
        category: "camisas",
        price: 229.90,
        oldPrice: 299.90,
        description: "Camisa oficial da Espanha",
        image: "img/espanhahome.jpg",
        size: ["P", "M", "G", "GG"],
        color: "Vermelha com Amarelo",
        availability: 11,
        details: "Padrão clássico da seleção"
    },
    
    // ACESSÓRIOS
    {
        id: 7,
        name: "Meião Oficial Copa 2026",
        category: "acessorios",
        price: 45.90,
        oldPrice: 65.00,
        description: "Meião profissional para futebol",
        image: "img/meiao.jpg",
        size: ["Único"],
        color: "Cores Variadas",
        availability: 50,
        details: "100% algodão, conforto garantido"
    },
    {
        id: 8,
        name: "Munhequeira Compressora",
        category: "acessorios",
        price: 29.90,
        oldPrice: 45.00,
        description: "Munhequeira com compressão esportiva",
        image: "img/munhequeira.jpg",
        size: ["P", "M", "G"],
        color: "Preta",
        availability: 30,
        details: "Material flexível, excelente suporte"
    },
    {
        id: 9,
        name: "Lenço Temático Copa",
        category: "acessorios",
        price: 19.90,
        oldPrice: 35.00,
        description: "Lenço para comemoração",
        image: "img/lenco.jpg",
        size: ["Único"],
        color: "Cores de Todas as Seleções",
        availability: 100,
        details: "Poliéster resistente, estampado"
    },
    {
        id: 10,
        name: "Bolsa para Chuteiras",
        category: "acessorios",
        price: 79.90,
        oldPrice: 120.00,
        description: "Bolsa organizada para equipamentos",
        image: "img/bolsa.jpg",
        size: ["Único"],
        color: "Preta",
        availability: 20,
        details: "Compartimentos múltiplos, durável"
    },
    {
        id: 11,
        name: "Garrafinha Térmica 750ml",
        category: "acessorios",
        price: 89.90,
        oldPrice: 130.00,
        description: "Garrafa térmica para manter bebidas",
        image: "img/garrafa.jpg",
        size: ["Único"],
        color: "Inox com Estampa",
        availability: 25,
        details: "Mantém temperatura por 24h"
    },
    
    // BONÉS
    {
        id: 12,
        name: "Boné Brasil Ajustável",
        category: "bones",
        price: 59.90,
        oldPrice: 85.00,
        description: "Boné oficial com logo do Brasil",
        image: "img/bone.jpg",
        size: ["Único (Ajustável)"],
        color: "Amarelo com Verde",
        availability: 35,
        details: "Aba estruturada, 100% algodão"
    },
    {
        id: 13,
        name: "Boné Argentina Ajustável",
        category: "bones",
        price: 59.90,
        oldPrice: 85.00,
        description: "Boné oficial da Argentina",
        image: "img/bonea.jpg",
        size: ["Único (Ajustável)"],
        color: "Azul e Branco",
        availability: 30,
        details: "Design icônico com fivela traseira"
    },
    {
        id: 14,
        name: "Boné Alemanha Ajustável",
        category: "bones",
        price: 59.90,
        oldPrice: 85.00,
        description: "Boné oficial da Alemanha",
        image: "img/boneaa.jpg",
        size: ["Único (Ajustável)"],
        color: "Preto",
        availability: 28,
        details: "Material premium, muito confortável"
    },
    {
        id: 15,
        name: "Boné França Ajustável",
        category: "bones",
        price: 59.90,
        oldPrice: 85.00,
        description: "Boné oficial da França",
        image: "img/bonefra.jpg",
        size: ["Único (Ajustável)"],
        color: "Azul Marinho",
        availability: 32,
        details: "Clássico e elegante"
    },
    
    // CHUTEIRAS
    {
        id: 16,
        name: "Chuteira Pro Speed Boost",
        category: "chuteiras",
        price: 449.90,
        oldPrice: 599.90,
        description: "Chuteira profissional de alta performance",
        image: "img/chuteira1.jpg",
        size: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43"],
        color: "Vermelha e Preta",
        availability: 15,
        details: "Tração máxima, toque de bola aprimorado"
    },
    {
        id: 17,
        name: "Chuteira Controle Total",
        category: "chuteiras",
        price: 399.90,
        oldPrice: 549.90,
        description: "Chuteira para máximo controle",
        image: "img/chuteira2.jpg",
        size: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43"],
        color: "Branca e Preta",
        availability: 18,
        details: "Solado específico para todo tipo de campo"
    },
    {
        id: 18,
        name: "Chuteira Campo Profissional",
        category: "chuteiras",
        price: 349.90,
        oldPrice: 499.90,
        description: "Chuteira robusta para campo",
        image: "img/chuteeira.jpg",
        size: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43"],
        color: "Amarela",
        availability: 12,
        details: "Durabilidade e conforto garantidos"
    },
    {
        id: 19,
        name: "Chuteira Futsal Indoor",
        category: "chuteiras",
        price: 279.90,
        oldPrice: 399.90,
        description: "Chuteira específica para quadra",
        image: "img/chuteira.jpg",
        size: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43"],
        color: "Azul",
        availability: 20,
        details: "Sola lisa, excelente mobilidade"
    },
    
    // OUTROS
    {
        id: 20,
        name: "Bandeira Brasil Oficial",
        category: "outros",
        price: 39.90,
        oldPrice: 59.90,
        description: "Bandeira oficial para comemoração",
        image: "img/bandeirao.jpg",
        size: ["1m x 1.5m"],
        color: "Verde, Amarelo e Azul",
        availability: 40,
        details: "Poliéster resistente com varão"
    },
    {
        id: 21,
        name: "Kit Torcedor Completo",
        category: "outros",
        price: 99.90,
        oldPrice: 149.90,
        description: "Kit com acessórios para torcedor",
        image: "img/kit.jpg",
        size: ["Único"],
        color: "Variado",
        availability: 25,
        details: "Inclui lenço, pulseira e adesivos"
    },
    {
        id: 22,
        name: "Relógio Copa do Mundo 2026",
        category: "outros",
        price: 129.90,
        oldPrice: 189.90,
        description: "Relógio comemorativo da Copa",
        image: "img/relogios.jpg",
        size: ["Único"],
        color: "Preto com Detalhes Dourados",
        availability: 10,
        details: "Quartzo, resistente à água"
    },
    {
        id: 23,
        name: "Caneco Coletores 500ml",
        category: "outros",
        price: 34.90,
        oldPrice: 49.90,
        description: "Caneco temático de vidro",
        image: "img/caneco.jpg",
        size: ["500ml"],
        color: "Cores de Seleções",
        availability: 50,
        details: "Vidro resistente, base antiderrapante"
    },
    {
        id: 24,
        name: "Chaveiro Seleções",
        category: "outros",
        price: 14.90,
        oldPrice: 24.90,
        description: "Chaveiro em metal com logo",
        image: "img/chaveiro.jpg",
        size: ["5cm"],
        color: "Cores Variadas",
        availability: 100,
        details: "Metal oxidado, durável"
    }
];

// ===== SHOPPING CART MANAGEMENT =====
let cart = [];

function loadCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity > 0) {
            item.quantity = quantity;
        } else {
            removeFromCart(productId);
        }
        saveCart();
        updateCartUI();
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = getCartCount();
    }

    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const paymentBtn = document.getElementById('paymentBtn');

    if (cartItemsDiv) {
        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '<p class="text-center text-muted">Seu carrinho está vazio</p>';
            if (paymentBtn) paymentBtn.style.display = 'none';
        } else {
            cartItemsDiv.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-header">
                        <div>
                            <div class="cart-item-name">${item.name}</div>
                            <small class="text-muted">R$ ${item.price.toFixed(2)} cada</small>
                        </div>
                        <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                    <div class="cart-item-controls">
                        <input type="number" min="1" class="qty-input" value="${item.quantity}" 
                               onchange="updateQuantity(${item.id}, this.value)">
                        <button class="btn-remove" onclick="removeFromCart(${item.id})">Remover</button>
                    </div>
                </div>
            `).join('');
            if (paymentBtn) paymentBtn.style.display = 'block';
        }

        if (cartTotal) {
            cartTotal.textContent = getCartTotal().toFixed(2);
        }
    }
}

// ===== PRODUCTS DISPLAY =====
function displayProducts(productsToShow = products) {
    const container = document.getElementById('productsContainer');
    if (!container) return;

    if (productsToShow.length === 0) {
        container.innerHTML = '<div class="col-12"><p class="text-center text-muted">Nenhum produto encontrado</p></div>';
        return;
    }

    container.innerHTML = productsToShow.map(product => `
        <div class="col-md-6 col-lg-4">
            <div class="product-card">
               <div class="product-image-container">
    <img
        src="${product.image}"
        alt="${product.name}"
        class="product-image"
    >

    ${product.availability < 5 ?
        '<span class="product-badge">Últimas Unidades!</span>'
        : ''
    }
</div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    
                    <div class="product-specs">
                        <div class="spec-item">
                            <span class="spec-label">Cor:</span>
                            <span>${product.color}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Tamanho:</span>
                            <span>${Array.isArray(product.size) ? product.size[0] : product.size}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Disponível:</span>
                            <span class="stock-available">${product.availability} unidade(s)</span>
                        </div>
                    </div>

                    <div class="product-price">
                        ${product.oldPrice ? `<span class="product-price-old">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                        R$ ${product.price.toFixed(2)}
                    </div>

                    <div class="product-footer">
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">➕ Adicionar</button>
                        <button class="btn-details" onclick="showProductDetails(${product.id})">👁️ Detalhes</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== PRODUCT DETAILS MODAL =====
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const details = `
        <strong>Produto:</strong> ${product.name}<br>
        <strong>Descrição:</strong> ${product.description}<br>
        <strong>Detalhes:</strong> ${product.details}<br>
        <strong>Cores:</strong> ${product.color}<br>
        <strong>Tamanhos:</strong> ${Array.isArray(product.size) ? product.size.join(', ') : product.size}<br>
        <strong>Preço:</strong> R$ ${product.price.toFixed(2)}<br>
        <strong>Disponibilidade:</strong> ${product.availability} unidade(s)<br>
    `;

    alert(details);
}

// ===== SEARCH AND FILTER =====
function filterProducts() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const selectedCategory = document.getElementById('categoryFilter')?.value || '';

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
}

// ===== NOTIFICATIONS =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #ffd700, #ffed4e);
        color: #003d82;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        font-weight: 700;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// ===== CAROUSEL FUNCTIONALITY =====
let currentCarouselIndex = 0;
let carouselAutoplayInterval;

const featuredProducts = [
    products[2],   // Camisa Brasil Home
    products[19],  // Chuteira Pro Speed
    products[12],  // Boné Brasil
    products[7],   // Meião
    products[20]   // Bandeira Brasil
];

function initializeCarousel() {
    renderCarouselSlides();
    renderCarouselIndicators();
    autoplayCarousel();
}

function renderCarouselSlides() {
    const carouselInner = document.getElementById('carouselInner');
    if (!carouselInner) return;

    carouselInner.innerHTML = featuredProducts.map((product, index) => `
        <div class="carousel-slide ${index === 0 ? 'active' : ''}">
            <div class="carousel-slide-content">
                <div class="carousel-slide-category">${product.category}</div>
                <div class="carousel-slide-image">
                    ${typeof product.image === 'string' && product.image.startsWith('img/') 
                        ? `<img src="${product.image}" alt="${product.name}" style="max-width: 150px; height: auto;">` 
                        : product.image}
                </div>
                <div class="carousel-slide-name">${product.name}</div>
                <div class="carousel-slide-desc">${product.description}</div>
                <div class="carousel-slide-price">
                    ${product.oldPrice ? `<span class="carousel-slide-price-old">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                    R$ ${product.price.toFixed(2)}
                </div>
                <button class="carousel-slide-button" onclick="addToCart(${product.id})">
                    ➕ ADICIONAR AO CARRINHO
                </button>
            </div>
        </div>
    `).join('');
}

function renderCarouselIndicators() {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!indicatorsContainer) return;

    indicatorsContainer.innerHTML = featuredProducts.map((_, index) => `
        <div class="carousel-indicator ${index === 0 ? 'active' : ''}" 
             onclick="goToCarouselSlide(${index})"></div>
    `).join('');
}

function moveCarousel(direction) {
    clearInterval(carouselAutoplayInterval);
    currentCarouselIndex += direction;
    
    if (currentCarouselIndex >= featuredProducts.length) {
        currentCarouselIndex = 0;
    } else if (currentCarouselIndex < 0) {
        currentCarouselIndex = featuredProducts.length - 1;
    }
    
    updateCarouselDisplay();
    autoplayCarousel();
}

function goToCarouselSlide(index) {
    clearInterval(carouselAutoplayInterval);
    currentCarouselIndex = index;
    updateCarouselDisplay();
    autoplayCarousel();
}

function updateCarouselDisplay() {
    const carouselInner = document.getElementById('carouselInner');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (carouselInner) {
        const offset = -currentCarouselIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
    
    indicators.forEach((indicator, index) => {
        if (index === currentCarouselIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function autoplayCarousel() {
    carouselAutoplayInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000); // Muda a cada 5 segundos
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    loadCart();
    updateCartUI();

    // Initialize carousel
    initializeCarousel();

    // Display products
    displayProducts();

    // Set up event listeners
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const cartBtn = document.getElementById('cartBtn');

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }

    if (cartBtn) {
        cartBtn.addEventListener('click', function(e){
            e.preventDefault();
        });
    }

    // Atualizar carrinho quando modal abre
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('show.bs.modal', function() {
            updateCartUI();
        });
    }

    // Add animation to style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
    `;
    document.head.appendChild(style);
});

// ===== INTEGRAÇÃO COM PAYPAL =====
paypal.Buttons({
    createOrder: (data, actions) => {
        if (cart.length === 0) {
            alert("O carrinho está vazio!");
            return;
        }
        
        const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: "BRL",
                    value: total.toFixed(2)
                }
            }]
        });
    },

    onApprove: (data, actions) => {
        return actions.order.capture().then(details => {
            alert(`Pagamento realizado com sucesso por ${details.payer.name.given_name}!`);
            cart = [];
            saveCart();
            updateCartUI();
            document.getElementById('cartModal').style.display = 'none';
        });
    },

    onError: err => {
        console.error("Erro no PayPal:", err);
        alert(`Erro no pagamento: ${err.message || "Erro desconhecido"}`);
    }

}).render("#paypal-button-container");

