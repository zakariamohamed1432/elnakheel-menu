const menuData = [
    {
        id: "pizza",
        title: "البيتزا الإيطالي",
        items: [
            { name: "مارجريتا", prices: [{ label: "صغير", price: 70 }, { label: "وسط", price: 85 }, { label: "كبير", price: 105 }] },
            { name: "لحمة مفرومة", prices: [{ label: "صغير", price: 85 }, { label: "وسط", price: 100 }, { label: "كبير", price: 115 }] },
            { name: "شاورما فراخ", prices: [{ label: "صغير", price: 80 }, { label: "وسط", price: 100 }, { label: "كبير", price: 115 }] },
            { name: "بيبروني", prices: [{ label: "صغير", price: 80 }, { label: "وسط", price: 100 }, { label: "كبير", price: 115 }] },
            { name: "تشيكن رانش", prices: [{ label: "صغير", price: 85 }, { label: "وسط", price: 110 }, { label: "كبير", price: 120 }] },
            { name: "تشيكن باربكيو", prices: [{ label: "صغير", price: 85 }, { label: "وسط", price: 110 }, { label: "كبير", price: 120 }] },
            { name: "تشيكن استربس رانش", prices: [{ label: "صغير", price: 85 }, { label: "وسط", price: 110 }, { label: "كبير", price: 120 }] },
            { name: "هوت دوج", prices: [{ label: "صغير", price: 80 }, { label: "وسط", price: 100 }, { label: "كبير", price: 115 }] },
            { name: "سجق", prices: [{ label: "صغير", price: 80 }, { label: "وسط", price: 100 }, { label: "كبير", price: 115 }] },
            { name: "بسطرمة", prices: [{ label: "صغير", price: 90 }, { label: "وسط", price: 110 }, { label: "كبير", price: 125 }] },
            { name: "ميكس جبن", desc: "رومي - شيدر - موتزاريلا", prices: [{ label: "صغير", price: 85 }, { label: "وسط", price: 110 }, { label: "كبير", price: 120 }] },
            { name: "سوبر سوبريم", desc: "هوت دوج - سلامي - سجق", prices: [{ label: "صغير", price: 85 }, { label: "وسط", price: 110 }, { label: "كبير", price: 120 }] },
            { name: "ميكس لحوم", desc: "لحمة - سوسيس - سجق", prices: [{ label: "صغير", price: 85 }, { label: "وسط", price: 110 }, { label: "كبير", price: 120 }] },
            { name: "سجق كيري", prices: [{ label: "صغير", price: 90 }, { label: "وسط", price: 110 }, { label: "كبير", price: 125 }] }
        ]
    },
    {
        id: "pasta",
        title: "المكرونات",
        items: [
            { name: "مكرونة صلصة", prices: [{ label: "السعر", price: 35 }] },
            { name: "مكرونة لحمة مفرومة", prices: [{ label: "السعر", price: 70 }] },
            { name: "مكرونة شاورما فراخ", prices: [{ label: "السعر", price: 70 }] },
            { name: "مكرونة سجق", prices: [{ label: "السعر", price: 65 }] },
            { name: "مكرونة سوسيس", prices: [{ label: "السعر", price: 65 }] },
            { name: "مكرونة اسبيشيال", prices: [{ label: "السعر", price: 80 }] }
        ]
    },
    {
        id: "crepe",
        title: "الكريب الحادق",
        items: [
            { name: "كريب بطاطس", prices: [{ label: "السعر", price: 50 }] },
            { name: "كريب فراخ بانيه", prices: [{ label: "السعر", price: 65 }] },
            { name: "كريب سوسيس", prices: [{ label: "السعر", price: 65 }] },
            { name: "كريب فرايد تشيكن", prices: [{ label: "السعر", price: 75 }] },
            { name: "كريب شاورما فراخ", prices: [{ label: "السعر", price: 75 }] },
            { name: "كريب شيش طاووق", prices: [{ label: "السعر", price: 80 }] },
            { name: "كريب كرسبي", prices: [{ label: "السعر", price: 75 }] },
            { name: "كريب ميكس جبن", prices: [{ label: "السعر", price: 75 }] },
            { name: "كريب ميكس فراخ", prices: [{ label: "السعر", price: 90 }] },
            { name: "كريب فراخ بانيه وسوسيس", prices: [{ label: "السعر", price: 80 }] }
        ]
    },
    {
        id: "white-pasta",
        title: "مكرونة وايت صوص",
        items: [
            { name: "مكرونة بشاميل سادة", prices: [{ label: "السعر", price: 70 }] },
            { name: "مكرونة بشاميل لحمة", prices: [{ label: "السعر", price: 90 }] },
            { name: "مكرونة بشاميل فراخ", prices: [{ label: "السعر", price: 90 }] },
            { name: "مكرونة نجرسكو فراخ", prices: [{ label: "السعر", price: 90 }] },
            { name: "مكرونة نجرسكو لحمة", prices: [{ label: "السعر", price: 90 }] },
            { name: "مكرونة نجرسكو سجق", prices: [{ label: "السعر", price: 85 }] },
            { name: "مكرونة نجرسكو سوسيس", prices: [{ label: "السعر", price: 85 }] }
        ]
    },
    {
        id: "grills",
        title: "المشويات",
        items: [
            { name: "وجبة ربع فراخ", desc: "ربع فراخ + أرز بسمتي + طحينة + سلطة + عيش", prices: [{ label: "السعر", price: 100 }] },
            { name: "وجبة نص فراخ", desc: "نص فراخ + أرز بسمتي + طحينة + سلطة + عيش", prices: [{ label: "السعر", price: 190 }] },
            { name: "وجبة شيش طاووق", desc: "2 سيخ شيش + أرز بسمتي + طحينة + سلطة + عيش", prices: [{ label: "السعر", price: 100 }] },
            { name: "وجبة ربع كفتة", desc: "ربع كفتة + أرز بسمتي + طحينة + سلطة + عيش", prices: [{ label: "السعر", price: 150 }] },
            { name: "وجبة نص كفتة", desc: "نص كفتة + أرز بسمتي + طحينة + سلطة + عيش", prices: [{ label: "السعر", price: 280 }] },
            { name: "وجبة ميكس الشرق", desc: "ربع فراخ + 2 كفتة + أرز بسمتي + طحينة + سلطة + عيش", prices: [{ label: "السعر", price: 160 }] },
            { name: "وجبة ميكس اللمة", desc: "شيش طاووق + كفتة + سجق + أرز بسمتي + طحينة + سلطة + عيش", prices: [{ label: "السعر", price: 170 }] }
        ]
    },
    {
        id: "sandwiches",
        title: "ساندوتشات",
        items: [
            { name: "كبدة اسكندراني", prices: [{ label: "كيزر", price: 20 }, { label: "فينو", price: 35 }] },
            { name: "سجق شرقي", prices: [{ label: "كيزر", price: 20 }, { label: "فينو", price: 35 }] },
            { name: "كفتة جريل", prices: [{ label: "فينو", price: 50 }] },
            { name: "هوت دوج", prices: [{ label: "فينو", price: 40 }] },
            { name: "فاهيتا سوسيس", prices: [{ label: "فينو", price: 50 }] },
            { name: "فراخ بانيه", prices: [{ label: "فينو", price: 50 }] },
            { name: "شاورما فراخ", prices: [{ label: "كيزر", price: 30 }, { label: "فينو", price: 50 }] },
            { name: "فاهيتا فراخ", prices: [{ label: "فينو", price: 50 }] },
            { name: "استيك فراخ", prices: [{ label: "فينو", price: 50 }] },
            { name: "شيش طاووق", prices: [{ label: "فينو", price: 50 }] },
            { name: "استربس رانش", prices: [{ label: "فينو", price: 60 }] }
        ]
    },
    {
        id: "fried-sandwiches",
        title: "ساندوتشات فرايد تشيكن",
        items: [
            { name: "كلاسيك فرايد", desc: "قطعة فراخ مقرمشة + خس + مايونيز + كاتشب + شيدر", prices: [{ label: "سنجل", price: 90 }, { label: "دابل", price: 135 }] },
            { name: "رانش فرايد", desc: "قطعة فراخ مقرمشة + خس + رانش + شيدر", prices: [{ label: "سنجل", price: 95 }, { label: "دابل", price: 145 }] },
            { name: "فاير فرايد", desc: "قطعة فراخ مقرمشة + خس + هالبينو + مايونيز + شيدر", prices: [{ label: "سنجل", price: 95 }, { label: "دابل", price: 145 }] },
            { name: "رويال ميكس", desc: "قطعة فراخ مقرمشة + خس + هالبينو + شرائح رومي مدخن + شيدر", prices: [{ label: "السعر", price: 110 }] },
            { name: "شيتوس فرايد", desc: "قطعة فراخ مقرمشة + خس + شيتوس + صوص شيدر", prices: [{ label: "سنجل", price: 95 }, { label: "دابل", price: 145 }] }
        ]
    },
    {
        id: "fried-meals",
        title: "فرايد تشيكن",
        items: [
            { name: "وجبة استربس 2 قطعة", desc: "2 قطع فراخ + أرز + بطاطس + كول سلو + كيزر", prices: [{ label: "السعر", price: 75 }] },
            { name: "وجبة استربس 4 قطع", desc: "4 قطع فراخ + أرز + بطاطس + كول سلو + كيزر", prices: [{ label: "السعر", price: 110 }] },
            { name: "وجبة استربس 6 قطع", desc: "6 قطع فراخ + أرز + بطاطس + كول سلو + كيزر", prices: [{ label: "السعر", price: 190 }] }
        ]
    },
    {
        id: "tasa",
        title: "الطاسات",
        items: [
            { name: "طاسة الجبن سادة", prices: [{ label: "السعر", price: 80 }] },
            { name: "طاسة الجبن سجق", prices: [{ label: "السعر", price: 90 }] },
            { name: "طاسة الجبن فراخ", prices: [{ label: "السعر", price: 95 }] },
            { name: "طاسة فرايد تشيكن", prices: [{ label: "السعر", price: 95 }] }
        ]
    },
    {
        id: "appetizers",
        title: "ركن المقبلات",
        items: [
            { name: "أرز بالكبدة", prices: [{ label: "السعر", price: 60 }] },
            { name: "حواوشي بلدي", prices: [{ label: "السعر", price: 40 }] },
            { name: "باكت بطاطس", prices: [{ label: "السعر", price: 25 }] },
            { name: "أرز ريزو", desc: "أرز + شاورما + صوص باربكيو", prices: [{ label: "السعر", price: 60 }] },
            { name: "بطاطس بالجبنة", desc: "بطاطس + صوص الشيدر", prices: [{ label: "السعر", price: 50 }] },
            { name: "فرايز تشيكن تشيزي", desc: "بطاطس + استربس + صوص الشيدر", prices: [{ label: "السعر", price: 60 }] }
        ]
    },
    {
        id: "burger",
        title: "ساندوتشات برجر",
        items: [
            { name: "كلاسيك برجر", desc: "برجر + تركي مدخن + خس + كاتشب + مايونيز + شيدر", prices: [{ label: "سنجل", price: 90 }, { label: "دابل", price: 135 }] },
            { name: "تيستي برجر", desc: "برجر + تركي مدخن + خس + بيج تيستي + شيدر", prices: [{ label: "سنجل", price: 95 }, { label: "دابل", price: 145 }] },
            { name: "باربيكيو برجر", desc: "برجر + تركي مدخن + خس + باربكيو + شيدر", prices: [{ label: "سنجل", price: 95 }, { label: "دابل", price: 145 }] },
            { name: "فاير برجر", desc: "برجر + تركي مدخن + خس + بيج تيستي + هالبينو + شيدر", prices: [{ label: "سنجل", price: 95 }, { label: "دابل", price: 145 }] },
            { name: "برجر كينج", desc: "برجر + تركي مدخن + خس + بيج تيستي + حلقات بصل + صوابع جبنة شيدر", prices: [{ label: "سنجل", price: 115 }, { label: "دابل", price: 165 }] }
        ]
    },
    {
        id: "extras",
        title: "إضافات جانبية",
        items: [
            { name: "أرز بسمتي", prices: [{ label: "السعر", price: 35 }] },
            { name: "قطعة استربس", prices: [{ label: "السعر", price: 30 }] },
            { name: "إضافة موتزاريلا", prices: [{ label: "السعر", price: 25 }] },
            { name: "سلطة خضراء", prices: [{ label: "السعر", price: 10 }] },
            { name: "طحينة", prices: [{ label: "السعر", price: 15 }] },
            { name: "ثومية", prices: [{ label: "السعر", price: 20 }] },
            { name: "كول سلو", prices: [{ label: "السعر", price: 35 }] },
            { name: "شوي فراخ", prices: [{ label: "السعر", price: 50 }] },
            { name: "كاتشب", prices: [{ label: "السعر", price: 10 }] },
            { name: "صوص من اختيارك", prices: [{ label: "السعر", price: 20 }] },
            { name: "عيش", prices: [{ label: "السعر", price: 10 }] }
        ]
    }
];

let cart = [];

const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderMenu(filterCat = "all", searchTerm = "") {
    menuContainer.innerHTML = "";
    const term = searchTerm.trim().toLowerCase();

    menuData.forEach(section => {
        if (filterCat !== "all" && section.id !== filterCat) return;

        const filteredItems = section.items.filter(item =>
            item.name.toLowerCase().includes(term) ||
            (item.desc && item.desc.toLowerCase().includes(term))
        );

        if (filteredItems.length === 0) return;

        const block = document.createElement("div");
        block.className = "category-block";

        let itemsHTML = filteredItems.map(item => {
            const pricesHTML = item.prices.map(p => `
                <button class="price-pill" onclick="addToCart('${item.name}', '${p.label}', ${p.price})">
                    <span class="pill-size">${p.label === 'السعر' ? 'إضافة' : p.label}</span>
                    <span class="pill-value">${p.price} ج.م</span>
                </button>
            `).join("");

            return `
                <div class="menu-item-card">
                    <div>
                        <div class="item-name">${item.name}</div>
                        ${item.desc ? `<div class="item-description">${item.desc}</div>` : ""}
                    </div>
                    <div class="item-prices-group">${pricesHTML}</div>
                </div>
            `;
        }).join("");

        block.innerHTML = `
            <div class="category-title-bar">
                <span>${section.title}</span>
                <small>${filteredItems.length} صنف</small>
            </div>
            <div class="items-grid-modern">${itemsHTML}</div>
        `;

        menuContainer.appendChild(block);
    });
}

function addToCart(name, size, price) {
    const label = size === "السعر" ? name : `${name} (${size})`;
    const existing = cart.find(i => i.label === label);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ label, price, qty: 1 });
    }
    updateCartUI();
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById("cartCount");
    const previewEl = document.getElementById("cartTotalPreview");
    const totalEl = document.getElementById("cartTotal");
    const itemsEl = document.getElementById("cartItems");

    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    countEl.textContent = totalQty;
    previewEl.textContent = `${totalPrice} ج.م`;
    totalEl.textContent = `${totalPrice} ج.م`;

    if (cart.length === 0) {
        itemsEl.innerHTML = `<p class="empty-text">السلة فارغة، اختر ما تحب من المنيو!</p>`;
        return;
    }

    itemsEl.innerHTML = cart.map((item, idx) => `
        <div class="cart-item-row">
            <div class="item-info-cart">
                <strong>${item.label}</strong><br>
                <span>${item.price * item.qty} ج.م (${item.price} × ${item.qty})</span>
            </div>
            <div class="quantity-controller">
                <button class="qty-btn-action" onclick="changeQty(${idx}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn-action" onclick="changeQty(${idx}, 1)">+</button>
            </div>
        </div>
    `).join("");
}

// التصفية عبر الأزرار
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderMenu(btn.dataset.category, searchInput.value);
    });
});

// البحث الفوري
searchInput.addEventListener("input", () => {
    const activeCat = document.querySelector(".filter-btn.active").dataset.category;
    renderMenu(activeCat, searchInput.value);
});

// إدارة المودال (فتح وغلق)
const cartModal = document.getElementById("cartModal");
document.getElementById("openCartBtn").onclick = () => cartModal.classList.add("open");
document.getElementById("closeCartBtn").onclick = () => cartModal.classList.remove("open");

// إرسال الطلب واتساب
document.getElementById("sendWhatsappBtn").onclick = () => {
    if (cart.length === 0) {
        alert("برجاء اختيار صنف واحد على الأقل لإرسال الطلب!");
        return;
    }

    const name = document.getElementById("customerName").value.trim();
    const address = document.getElementById("customerAddress").value.trim();
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    let msg = `*طلب جديد - منتجع قرية النخيل*\n`;
    msg += `--------------------------\n`;
    cart.forEach(item => {
        msg += `• ${item.label} × ${item.qty} = ${item.price * item.qty} ج.م\n`;
    });
    msg += `--------------------------\n`;
    msg += `*الإجمالي الكلي: ${total} ج.م*\n`;
    if (name) msg += `الاسم: ${name}\n`;
    if (address) msg += `المكان / العنوان: ${address}\n`;

    const phone = "201030005707";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
};

// التشغيل الافتراضي
renderMenu();