function initProductsFromGlobal() {
  if (typeof productsData === "undefined" || !Array.isArray(productsData)) {
    console.error("لم يتم العثور على productsData. تأكد من تحميل products.js قبل app.js");
    return;
  }
  renderMiniStore(productsData);
  renderShop(productsData);
  renderFeaturedProducts(productsData);
  setupModal(productsData);
  updateCartCount();
}

function renderFeaturedProducts(products) {
  const container = document.getElementById("featured-products");
  if (!container) return;

  const firstFour = products.slice(0, 4);
  container.innerHTML = firstFour.map(productCardHTML).join("");
}

function renderMiniStore(products) {
  const container = document.getElementById("mini-products-grid");
  if (!container) return;
  const firstFour = products.slice(0, 4);
  container.innerHTML = firstFour.map(productCardHTML).join("");
}

function renderShop(products) {
  const container = document.getElementById("shop-products-grid");
  if (!container) return;
  container.innerHTML = products.map(productCardHTML).join("");
}

function productCardHTML(product) {
// في ملف app.js داخل دالة productCardHTML
  return `
    <article class="moz-product-card" data-product-id="${product.id}">
      <div class="moz-product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="moz-product-body">
        <h3 class="moz-product-title">${product.name}</h3>
        <p class="moz-product-meta">جاهزة للشحن فوراً</p>
        <div class="moz-product-footer">
          <div class="moz-product-qty">
            <button type="button" class="moz-qty-btn" data-action="minus">-</button>
            <span class="moz-qty-value">1</span>
            <button type="button" class="moz-qty-btn" data-action="plus">+</button>
          </div>
          <div class="moz-product-price-wrap">
            <span class="moz-product-price">${product.price} جنيه</span>
          </div>
        </div>
      </div>
    </article>
  `;
}
function setupModal(products) {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  const imgEl = document.getElementById("modal-product-image");
  const nameEl = document.getElementById("modal-product-name");
  const priceEl = document.getElementById("modal-product-price");
  const primaryBtn = document.getElementById("modal-primary-action");
  const closeEls = modal.querySelectorAll("[data-modal-close]");

  function openModal(product) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
    nameEl.textContent = product.name;
    priceEl.textContent = `${product.price} جنيه`;

    // إضافة وصف للمنتج
    let descEl = document.getElementById("modal-product-desc");
    if (!descEl) {
      descEl = document.createElement("p");
      descEl.id = "modal-product-desc";
      descEl.className = "moz-modal-description";
      priceEl.parentNode.insertBefore(descEl, priceEl.nextSibling);
    }
    descEl.textContent = "مذكرة شاملة ومنظمة تساعدك على المذاكرة بفعالية. تحتوي على ملخصات وافيه ومسائل مجابة وتمارين متنوعة.";

    // إضافة محدد الكمية
    let qtySelector = document.getElementById("modal-qty-selector");
    if (!qtySelector) {
      qtySelector = document.createElement("div");
      qtySelector.id = "modal-qty-selector";
      qtySelector.className = "modal-qty-selector";
      qtySelector.innerHTML = `
        <span style="font-weight: 600; color: #64748b;">الكمية:</span>
        <button type="button" class="modal-qty-btn" data-action="minus">-</button>
        <span class="modal-qty-value">1</span>
        <button type="button" class="modal-qty-btn" data-action="plus">+</button>
      `;
      primaryBtn.parentNode.insertBefore(qtySelector, primaryBtn);
    }

    // تحديث زرار الطلب عشان يضيف المنتج للسلة
    primaryBtn.onclick = function() {
      const qtyEl = qtySelector.querySelector(".modal-qty-value");
      const quantity = parseInt(qtyEl.textContent) || 1;

      addToCart(product, quantity);
      closeModal();
    };

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  closeEls.forEach((el) => el.addEventListener("click", closeModal));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  document.addEventListener("click", (e) => {
    const minusBtn = e.target.closest(".moz-qty-btn[data-action='minus'], .featured-qty-btn[data-action='minus'], .modal-qty-btn[data-action='minus']");
    const plusBtn = e.target.closest(".moz-qty-btn[data-action='plus'], .featured-qty-btn[data-action='plus'], .modal-qty-btn[data-action='plus']");
    if (minusBtn || plusBtn) {
      e.stopPropagation();
      const qtyContainer = e.target.closest(".moz-product-qty, .featured-qty, .modal-qty-selector");
      const valueEl = qtyContainer.querySelector(".moz-qty-value, .featured-qty-value, .modal-qty-value");
      let current = Number(valueEl.textContent) || 1;
      if (minusBtn) {
        current = Math.max(1, current - 1);
      } else if (plusBtn) {
        current += 1;
      }
      valueEl.textContent = current;
      return;
    }

    const card = e.target.closest(".moz-product-card");
    if (!card) return;
    const id = Number(card.dataset.productId);
    const product = products.find((p) => p.id === id);
    if (product) openModal(product);
  });
}

initProductsFromGlobal();

function addToCart(product, quantity = 1) {
    let cart = JSON.parse(localStorage.getItem('user_cart')) || [];
    
    // إضافة المنتج مع الكمية
    for (let i = 0; i < quantity; i++) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            addedAt: new Date().toISOString()
        });
    }
    
    localStorage.setItem('user_cart', JSON.stringify(cart));
    updateCartCount();

    // استخدام Toast Notification بدل alert
    const message = `✅ ${product.name} اتضاف في الشنطة (${quantity} نسخة)`;
    if (typeof showToast === 'function') {
        showToast(message, 'success');
    } else {
        console.log(message);
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('user_cart')) || [];
    const countElements = document.querySelectorAll("#cart-count-badge, #cart-count");

    countElements.forEach(countElement => {
        countElement.innerText = cart.length;
    });
}

function logout() {
    localStorage.removeItem('session_user');
    if (typeof showToast === 'function') {
        showToast('تم تسجيل الخروج بنجاح', 'info');
    }
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

function updateAuthUI() {
    let user = null;
    try {
        user = JSON.parse(localStorage.getItem('session_user'));
    } catch (e) {
        console.error('Error parsing session_user:', e);
    }

    const desktopAuthContainers = document.querySelectorAll('.moz-auth-actions');

    desktopAuthContainers.forEach(authContainer => {
        if (user) {
            const avatarContent = user.profilePic
                ? `<img src="${user.profilePic}" alt="${user.firstName}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`
                : (user.firstName ? user.firstName[0] : 'U');

            authContainer.innerHTML = `
                <a href="account.html" class="desktop-user-link" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: #ffffff; font-weight: 600;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #2563eb); display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; border: 2px solid #312f2f; box-shadow: 0 2px 8px rgba(59,130,246,0.3); overflow: hidden; flex-shrink: 0;">
                        ${avatarContent}
                    </div>
                </a>
            `;
        } else {
            authContainer.innerHTML = `
                <a href="Login.html" class="moz-btn moz-btn-ghost moz-auth-link">تسجيل الدخول</a>
                <a href="Login.html" class="moz-btn moz-btn-primary moz-auth-link">إنشاء حساب</a>
            `;
        }
    });

    const mobileUserInfo = document.getElementById('mobileUserInfo');
    const mobileGuestInfo = document.getElementById('mobileGuestInfo');
    const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');

    if (user) {
        if (mobileUserInfo) {
            mobileUserInfo.style.display = 'flex';
            document.getElementById('mobileUserName').textContent = user.firstName || 'User';

            const mobileAvatar = document.getElementById('mobileUserAvatar');
            if (user.profilePic) {
                mobileAvatar.innerHTML = `<img src="${user.profilePic}" alt="${user.firstName}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
            } else {
                mobileAvatar.textContent = user.firstName ? user.firstName[0] : 'U';
            }
        }
        if (mobileGuestInfo) mobileGuestInfo.style.display = 'none';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'flex';
    } else {
        if (mobileUserInfo) mobileUserInfo.style.display = 'none';
        if (mobileGuestInfo) mobileGuestInfo.style.display = 'flex';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    updateCartCount();
});