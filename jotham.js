const products = [
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'Coffee',
    price: 28000,
    description: 'Espresso klasik dengan body tegas, aroma nutty, dan finish yang halus.',
    sizes: ['Single', 'Double'],
    badge: 'Best Seller',
    rating: '4.8',
    prep: '2 min'
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'Coffee',
    price: 32000,
    description: 'Espresso yang diencerkan dengan air panas menghasilkan rasa tajam dan bersih.',
    sizes: ['Medium', 'Large'],
    badge: 'Fresh',
    rating: '4.7',
    prep: '3 min'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'Coffee',
    price: 38000,
    description: 'Perpaduan espresso, susu foamed, dan busa lembut yang sangat creamy.',
    sizes: ['Regular', 'Large'],
    badge: 'Signature',
    rating: '4.9',
    prep: '4 min'
  },
  {
    id: 'cafe-latte',
    name: 'Café Latte',
    category: 'Coffee',
    price: 39000,
    description: 'Latte dengan tekstur susu lembut yang menyeimbangkan rasa kopi.',
    sizes: ['Regular', 'Large'],
    badge: 'Comfort',
    rating: '4.8',
    prep: '4 min'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    category: 'Coffee',
    price: 42000,
    description: 'Kombinasi espresso, cokelat, dan susu creamy yang manis dan nikmat.',
    sizes: ['Regular', 'Large'],
    badge: 'Premium',
    rating: '4.9',
    prep: '5 min'
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    category: 'Coffee',
    price: 42000,
    description: 'Espresso lembut dengan rasa karamel dan susu vanilla yang mewah.',
    sizes: ['Regular', 'Large'],
    badge: 'Best Seller',
    rating: '4.9',
    prep: '5 min'
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    category: 'Coffee',
    price: 40000,
    description: 'Latte dengan sentuhan vanilla yang aromatik dan lembut.',
    sizes: ['Regular', 'Large'],
    badge: 'Sweet',
    rating: '4.7',
    prep: '4 min'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    category: 'Non Coffee',
    price: 36000,
    description: 'Minuman cokelat hangat dengan tekstur kaya dan aroma kakao.',
    sizes: ['Regular', 'Large'],
    badge: 'Cozy',
    rating: '4.8',
    prep: '3 min'
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'Non Coffee',
    price: 41000,
    description: 'Matcha premium yang lembut, earthy, dan disajikan dengan susu creamy.',
    sizes: ['Regular', 'Large'],
    badge: 'Green',
    rating: '4.8',
    prep: '4 min'
  },
  {
    id: 'thai-tea',
    name: 'Thai Tea',
    category: 'Tea',
    price: 35000,
    description: 'Tea khas Thailand dengan rasa manis, creamy, dan aroma rempah.',
    sizes: ['Regular', 'Large'],
    badge: 'Classic',
    rating: '4.7',
    prep: '3 min'
  },
  {
    id: 'taro-milk-tea',
    name: 'Taro Milk Tea',
    category: 'Tea',
    price: 37000,
    description: 'Milk tea taro yang lembut, manis, dan sangat visual.',
    sizes: ['Regular', 'Large'],
    badge: 'Popular',
    rating: '4.8',
    prep: '4 min'
  },
  {
    id: 'strawberry-milk',
    name: 'Strawberry Milk',
    category: 'Non Coffee',
    price: 33000,
    description: 'Susu strawberry segar dengan balutan rasa manis alami.',
    sizes: ['Regular', 'Large'],
    badge: 'Fresh',
    rating: '4.6',
    prep: '3 min'
  },
  {
    id: 'mango-smoothie',
    name: 'Mango Smoothie',
    category: 'Smoothie',
    price: 39000,
    description: 'Smoothie mangga dingin dengan tekstur lembut dan rasa tropis.',
    sizes: ['Regular', 'Large'],
    badge: 'Tropical',
    rating: '4.8',
    prep: '3 min'
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    category: 'Tea',
    price: 30000,
    description: 'Tea segar dengan sentuhan lemon cerah untuk suasana ringan.',
    sizes: ['Regular', 'Large'],
    badge: 'Refreshing',
    rating: '4.7',
    prep: '3 min'
  },
  {
    id: 'brown-sugar-iced-coffee',
    name: 'Brown Sugar Iced Coffee',
    category: 'Coffee',
    price: 41000,
    description: 'Kopi dingin dengan gula merah yang kaya dan aromatik.',
    sizes: ['Regular', 'Large'],
    badge: 'Ice',
    rating: '4.9',
    prep: '4 min'
  }
];

const state = {
  search: '',
  category: 'Semua',
  cart: [],
  wishlist: [],
  isLoggedIn: false,
  theme: 'dark',
  selectedPayment: 'QRIS'
};

const menuGrid = document.getElementById('menu-grid');
const favoritesGrid = document.getElementById('favorites-grid');
const searchBox = document.getElementById('search-box');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartPanel = document.getElementById('cart-panel');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const toast = document.getElementById('toast');
const authModal = document.getElementById('auth-modal');
const checkoutModal = document.getElementById('checkout-modal');
const detailModal = document.getElementById('detail-modal');
const loader = document.getElementById('page-loader');
const themeToggle = document.getElementById('theme-toggle');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const authToggle = document.getElementById('auth-toggle');
const dashboardText = document.getElementById('dashboard-text');
const pointsValue = document.getElementById('points-value');
const ordersValue = document.getElementById('orders-value');
const voucherValue = document.getElementById('voucher-value');
const newsletterForm = document.getElementById('newsletter-form');
const chatWidget = document.getElementById('chat-widget');
const chatToggle = document.getElementById('chat-toggle');
const detailTitle = document.getElementById('detail-title');
const detailContent = document.getElementById('detail-content');
const paymentOptions = document.querySelectorAll('.payment-option');

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

function getProductImage(product) {
  return 'Iced_Americano.jpg';
}

function renderMenu() {
  const filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(state.search.toLowerCase());
    const matchesCategory = state.category === 'Semua' || product.category === state.category;
    return matchesSearch && matchesCategory;
  });

  if (!filtered.length) {
    menuGrid.innerHTML = '<div class="empty-state">Tidak ada menu yang cocok. Coba kata kunci lain.</div>';
    return;
  }

  menuGrid.innerHTML = filtered
    .map((product) => `
      <article class="menu-card reveal">
        <div class="menu-card__image">
          <img src="${getProductImage(product)}" alt="${product.name}" loading="lazy" />
        </div>
        <span class="tag">${product.badge}</span>
        <h3>${product.name}</h3>
        <div class="meta">${product.category} · ${product.prep}</div>
        <p>${product.description}</p>
        <div class="price-row">
          <strong class="price">${formatCurrency(product.price)}</strong>
          <span>${product.rating} ★</span>
        </div>
        <div class="menu-actions">
          <button class="icon-btn" data-detail="${product.id}">Quick View</button>
          <button class="icon-btn" data-wishlist="${product.id}">♡</button>
          <button class="btn btn-primary btn-small" data-add-cart="${product.id}">Add</button>
        </div>
      </article>
    `)
    .join('');
}

function renderFavorites() {
  const favorites = products.filter((product) => product.badge === 'Best Seller' || product.badge === 'Signature');
  favoritesGrid.innerHTML = favorites
    .slice(0, 3)
    .map(
      (product) => `
        <article class="info-card reveal">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="price-row">
            <strong class="price">${formatCurrency(product.price)}</strong>
            <button class="btn btn-primary btn-small" data-add-cart="${product.id}">Pesan</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderCart() {
  if (!state.cart.length) {
    cartItems.innerHTML = '<div class="empty-state">Keranjang masih kosong.</div>';
    cartCount.textContent = '0';
    cartTotal.textContent = 'Total: Rp 0';
    return;
  }

  cartCount.textContent = state.cart.length;
  cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return `
        <div class="cart-item">
          <div>
            <strong>${product.name}</strong>
            <div class="meta">${formatCurrency(product.price)} × ${item.qty}</div>
          </div>
          <div>${formatCurrency(product.price * item.qty)}</div>
        </div>
      `;
    })
    .join('');

  const total = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + product.price * item.qty;
  }, 0);
  cartTotal.textContent = `Total: ${formatCurrency(total)}`;
}

function renderWishlist() {
  const wishlist = state.wishlist.length ? state.wishlist : [];
  if (!wishlist.length) return;
  // Wishlist is used as a quick action state, and its item names are shown in the toast.
}

function toggleWishlist(id) {
  if (state.wishlist.includes(id)) {
    state.wishlist = state.wishlist.filter((item) => item !== id);
    showToast('Item dihapus dari wishlist');
  } else {
    state.wishlist.push(id);
    showToast('Item ditambahkan ke wishlist');
  }
  renderWishlist();
}

function openDetail(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  detailTitle.textContent = product.name;
  detailContent.innerHTML = `
    <div class="form-grid">
      <p>${product.description}</p>
      <p><strong>Ukuran:</strong> ${product.sizes.join(', ')}</p>
      <p><strong>Harga:</strong> ${formatCurrency(product.price)}</p>
      <p><strong>Rating:</strong> ${product.rating} ★</p>
      <button class="btn btn-primary" data-add-cart="${product.id}">Tambahkan ke Cart</button>
    </div>
  `;
  openModal(detailModal);
}

function toggleTheme() {
  document.body.classList.toggle('light');
  state.theme = document.body.classList.contains('light') ? 'light' : 'dark';
  themeToggle.textContent = state.theme === 'light' ? '☀️' : '🌙';
}

searchBox.addEventListener('input', (event) => {
  state.search = event.target.value;
  renderMenu();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    state.category = button.dataset.category;
    renderMenu();
  });
});

document.addEventListener('click', (event) => {
  const addCartButton = event.target.closest('[data-add-cart]');
  if (addCartButton) {
    addToCart(addCartButton.dataset.addCart);
  }

  const wishlistButton = event.target.closest('[data-wishlist]');
  if (wishlistButton) {
    toggleWishlist(wishlistButton.dataset.wishlist);
  }

  const detailButton = event.target.closest('[data-detail]');
  if (detailButton) {
    openDetail(detailButton.dataset.detail);
  }
});

cartToggle.addEventListener('click', () => cartPanel.classList.toggle('open'));
closeCart.addEventListener('click', () => cartPanel.classList.remove('open'));
authToggle.addEventListener('click', () => openModal(authModal));
themeToggle.addEventListener('click', toggleTheme);
checkoutBtn.addEventListener('click', () => openModal(checkoutModal));

document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', () => closeModal(document.getElementById(button.dataset.closeModal)));
});

document.getElementById('auth-form').addEventListener('submit', (event) => {
  event.preventDefault();
  state.isLoggedIn = true;
  renderDashboard();
  closeModal(authModal);
  showToast('Login berhasil. Selamat datang!');
});

document.getElementById('confirm-order').addEventListener('click', () => {
  if (!state.cart.length) {
    showToast('Keranjang Anda kosong');
    return;
  }
  closeModal(checkoutModal);
  state.cart = [];
  renderCart();
  showToast('Pesanan dikonfirmasi. Terima kasih!');
});

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Berlangganan berhasil. Promo akan segera dikirim.');
  newsletterForm.reset();
});

chatToggle.addEventListener('click', () => chatWidget.classList.toggle('open'));
paymentOptions.forEach((option) => {
  option.addEventListener('click', () => {
    paymentOptions.forEach((item) => item.classList.remove('active'));
    option.classList.add('active');
    state.selectedPayment = option.textContent.trim();
  });
});

document.querySelectorAll('.faq-item .question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('open');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });
revealItems.forEach((item) => observer.observe(item));

window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('hidden'), 700);
});

renderMenu();
renderFavorites();
renderCart();
renderDashboard();
