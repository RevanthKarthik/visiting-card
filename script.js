/* ============================================================
   PRELOADER
============================================================ */
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => preloader.remove(), 600);
    }, 700);
});

/* ============================================================
   DARK MODE TOGGLE
============================================================ */
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkToggle.textContent = "☀";
    } else {
        darkToggle.textContent = "☾";
    }
});

/* ============================================================
   MOBILE NAV MENU
============================================================ */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Close menu after clicking a link (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});

/* ============================================================
   FADE-IN SECTIONS ON SCROLL
============================================================ */
const fadeSections = document.querySelectorAll(".fade-section");

function fadeInOnScroll() {
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 80) {
            section.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

/* ============================================================
   UPDATE CURRENT YEAR IN FOOTER
============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================================================
   LANGUAGE SYSTEM (EN <-> AR)
============================================================ */

const langToggle = document.getElementById("langToggle");

// English Text Map
const EN = {
    "Home": "Home",
    "About": "About",
    "Services": "Services",
    "Profile": "Profile",
    "Contact": "Contact",
    "Call Now": "Call Now",
    "Direct Access": "Direct Access",
    "Quick Contact": "Quick Contact",
    "Alt Phone": "Alt Phone",
    "Alt Email": "Alt Email",
    "Location": "Location",
    "Reliable": "Reliable",
    "Manpower & Equipment Supply": "Manpower & Equipment Supply",
    "for your industrial projects.": "for your industrial projects.",
    "Industrial Support": "Industrial Support",
    "WhatsApp": "WhatsApp",
    "About Us": "About Us",
    "Key Services": "Key Services",
    "Company Profile": "Company Profile",
    "Download": "Download",
    "PDF File": "PDF File",
    "Primary Phone": "Primary Phone",
    "Secondary Phone": "Secondary Phone",
    "Primary Email": "Primary Email",
    "Secondary Email": "Secondary Email",
    "Find us on Google Maps": "Find us on Google Maps",
    "Tap to open navigation.": "Tap to open navigation.",
    "Open Map": "Open Map"
};

// Arabic Text Map
const AR = {
    "Home": "الرئيسية",
    "About": "من نحن",
    "Services": "الخدمات",
    "Profile": "الملف التعريفي",
    "Contact": "اتصل بنا",
    "Call Now": "اتصل الآن",
    "Direct Access": "وصول مباشر",
    "Quick Contact": "تواصل سريع",
    "Alt Phone": "رقم إضافي",
    "Alt Email": "بريد إضافي",
    "Location": "الموقع",
    "Reliable": "موثوقة",
    "Manpower & Equipment Supply": "توفير العمالة والمعدات",
    "for your industrial projects.": "لمشاريعكم الصناعية.",
    "Industrial Support": "دعم صناعي",
    "WhatsApp": "واتساب",
    "About Us": "نبذة عنا",
    "Key Services": "خدماتنا الأساسية",
    "Company Profile": "الملف التعريفي للشركة",
    "Download": "تحميل",
    "PDF File": "ملف PDF",
    "Primary Phone": "رقم الهاتف الرئيسي",
    "Secondary Phone": "رقم هاتف إضافي",
    "Primary Email": "البريد الإلكتروني الرئيسي",
    "Secondary Email": "البريد الإلكتروني الإضافي",
    "Find us on Google Maps": "موقعنا على خرائط جوجل",
    "Tap to open navigation.": "انقر لفتح الخريطة.",
    "Open Map": "افتح الخريطة"
};

let currentLang = "EN";

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "EN" ? "AR" : "EN";

    if (currentLang === "AR") {
        langToggle.textContent = "EN";
        document.documentElement.setAttribute("dir", "rtl");
        applyTranslations(AR);
    } else {
        langToggle.textContent = "AR";
        document.documentElement.setAttribute("dir", "ltr");
        applyTranslations(EN);
    }
});

function applyTranslations(langMap) {
    document.querySelectorAll("[data-text]").forEach(el => {
        const key = el.getAttribute("data-text");
        if (langMap[key]) el.innerHTML = langMap[key];
    });
}
