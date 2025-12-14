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
    FADE-IN SECTIONS ON SCROLL & ACTIVE NAV HIGHLIGHT
============================================================ */
/* ============================================================
    FADE-IN SECTIONS ON SCROLL
============================================================ */
const fadeSections = document.querySelectorAll(".fade-section");
// const navLinks = document.querySelectorAll('.nav-link'); // REMOVED

function fadeInOnScroll() {
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 80) {
            section.classList.add("visible");
        }
    });
}

// Combine both functions into a single scroll handler - SIMPLIFIED
function handleScrollEvents() {
    fadeInOnScroll();
    // setActiveNavLink(); // REMOVED
}

// Attach the combined function to scroll and load events
window.addEventListener("scroll", handleScrollEvents);
window.addEventListener("load", handleScrollEvents);

// REMOVED: Additional load listeners and setActiveNavLink function entirely

/* ============================================================
    UPDATE CURRENT YEAR IN FOOTER
============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================================================
    LANGUAGE SYSTEM (EN <-> AR) - MANHAL AL-KHALIGH
============================================================ */

const langToggle = document.getElementById("langToggle");

// English Text Map
const EN = {
    // Nav & General
    "Home": "Home",
    "About": "About",
    "Services": "Services",
    "Profile": "Profile",
    "Contact": "Contact",
    "Call Now": "Call Now",
    "Direct Access": "Direct Access",
    "Quick Contact": "Quick Contact",
    "WhatsApp": "WhatsApp",

    // Hero Section
    "Reliable": "Reliable",
    "Manpower & Equipment Supply": "Manpower & Equipment Supply",
    "for your industrial projects.": "for your industrial projects.",
    "Industrial Support": "Industrial Support",
    "Primary Phone": "Primary Phone",
    "Secondary Phone": "Secondary Phone",
    "Primary Email": "Primary Email",
    "Secondary Email": "Secondary Email",
    "Location": "Location",
    "Hero Text Content": "MANHAL AL-KHALIGH General Contracting is a leading provider of comprehensive industrial support, offering high-quality skilled manpower, robust equipment rentals, and essential site services for clients across the Kingdom of Saudi Arabia.",
    
    // About Section
    "About Us": "About Us",
    "About Subtitle": "MANHAL AL-KHALIGH General Contracting has established itself as a reliable partner in the industrial sector, focusing on providing essential resources to keep your critical projects running smoothly and efficiently.",
    "About Content 1 Heading": "Our Commitment to Quality",
    "About Content 1 Text": "We understand the demands of the industrial, construction, and oil & gas environments in Saudi Arabia. Our core mission is to deliver exceptional service through meticulously selected, certified manpower and a fleet of well-maintained, modern equipment. This dual focus ensures reliability and compliance for every contract.",
    "About Content 2 Heading": "Why Choose Us?",
    "About Content 2 Text": "Our strength lies in our rapid response capability and our commitment to safety. We provide flexible and scalable solutions, whether you require a small team of specialists for a short turnaround or a complete crew with heavy machinery for a long-term project. We are your one-stop solution for industrial resource management in Jubail and beyond.",

    // Services Section
    "Key Services": "Key Services",
    "Services Intro Text": "We offer a comprehensive portfolio of industrial services, tailored to meet the exacting standards of our clients in key sectors across the Kingdom. Our solutions streamline your operations and minimize project downtime.",
    "Manpower Supply": "Manpower Supply",
    "Manpower Text": "Supply of industrial workforce including highly skilled, certified technicians, semi-skilled workers, and specialized tradesmen.",
    "Equipment Rental": "Equipment Rental",
    "Equipment Text": "Rental of heavy machinery, construction tools, industrial vehicles, and all necessary equipment with certified operators.",
    "Site Support": "Site Support",
    "Site Support Text": "Comprehensive site supervision, project logistics, administrative support, and coordination to ensure smooth operations.",
    "Safety & HSE": "Safety & HSE", // NEW
    "Safety Text": "Providing specialized safety officers and implementing rigorous Health, Safety, and Environment (HSE) protocols on site.", // NEW
    "Logistics & Transport": "Logistics & Transport", // NEW
    "Logistics Text": "Efficient transportation of personnel and equipment, material handling, and supply chain coordination for industrial sites.", // NEW
   "Network & Telecom Solutions": "Network & Telecom Solutions", 
    "Network & Telecom Text": "Data & Voice Designing and Installation of Structure Cabling System. Optical Fiber & Electrical Works. C.C. TV Camera.", // UPDATED CONTENT
    // Profile & Contact
    "Company Profile": "Company Profile",
    "Download Company Profile": "Download Company Profile",
    "Download": "Download",
    "PDF File": "PDF File",
    "Contact Details": "Contact Details",
    "Find us on Google Maps": "Find us on Google Maps",
    "Tap to open navigation.": "Tap to open navigation.",
    "Open Map": "Open Map"
};

// Arabic Text Map (Fully Revised and Expanded)
const AR = {
    // Nav & General
    "Home": "الرئيسية",
    "About": "من نحن",
    "Services": "الخدمات",
    "Profile": "الملف التعريفي",
    "Contact": "اتصل بنا",
    "Call Now": "اتصل الآن",
    "Direct Access": "وصول مباشر",
    "Quick Contact": "تواصل سريع",
    "WhatsApp": "واتساب",

    // Hero Section
    "Reliable": "موثوقة",
    "Manpower & Equipment Supply": "لتوريد العمالة والمعدات",
    "for your industrial projects.": "لمشاريعكم الصناعية.",
    "Industrial Support": "دعم صناعي",
    "Primary Phone": "رقم الهاتف الرئيسي",
    "Secondary Phone": "رقم هاتف إضافي",
    "Primary Email": "البريد الإلكتروني الرئيسي",
    "Secondary Email": "بريد إلكتروني إضافي",
    "Location": "الموقع",
    "Hero Text Content": "تعد شركة منهل الخليج للمقاولات العامة مزوداً رائداً للدعم الصناعي الشامل، حيث توفر عمالة ماهرة عالية الجودة، ومعدات قوية للإيجار، وخدمات موقع أساسية للعملاء في جميع أنحاء المملكة العربية السعودية.",
    
    // About Section
    "About Us": "نبذة عنا",
    "About Subtitle": "لقد أثبتت شركة منهل الخليج للمقاولات العامة نفسها كشريك موثوق به في القطاع الصناعي، مع التركيز على توفير الموارد الأساسية للحفاظ على سير مشاريعكم الهامة بسلاسة وكفاءة.",
    "About Content 1 Heading": "التزامنا بالجودة",
    "About Content 1 Text": "نحن نتفهم متطلبات البيئات الصناعية والبناء والنفط والغاز في المملكة العربية السعودية. مهمتنا الأساسية هي تقديم خدمة استثنائية من خلال عمالة مختارة ومعتمدة بعناية وأسطول من المعدات الحديثة التي تتم صيانتها جيدًا. ويضمن هذا التركيز المزدوج الموثوقية والامتثال لكل عقد.",
    "About Content 2 Heading": "لماذا تختارنا؟",
    "About Content 2 Text": "تكمن قوتنا في قدرتنا على الاستجابة السريعة والتزامنا بالسلامة. نحن نقدم حلولاً مرنة وقابلة للتطوير، سواء كنت بحاجة إلى فريق صغير من المتخصصين لإنجاز سريع أو طاقم كامل مع آلات ثقيلة لمشروع طويل الأجل. نحن الحل الشامل لإدارة الموارد الصناعية في الجبيل وخارجها.",

    // Services Section
    "Key Services": "خدماتنا الأساسية",
    "Services Intro Text": "نقدم مجموعة شاملة من الخدمات الصناعية، مصممة لتلبية المعايير الدقيقة لعملائنا في القطاعات الرئيسية في جميع أنحاء المملكة. تعمل حلولنا على تبسيط عملياتكم وتقليل وقت توقف المشروع.",
    "Manpower Supply": "توريد العمالة",
    "Manpower Text": "توريد القوى العاملة الصناعية بما في ذلك الفنيين المهرة والمعتمدين ذوي الخبرة العالية، والعمال شبه المهرة، والحرفيين المتخصصين.",
    "Equipment Rental": "تأجير المعدات",
    "Equipment Text": "تأجير الآليات الثقيلة، وأدوات البناء، والمركبات الصناعية، وجميع المعدات اللازمة مع المشغلين المعتمدين.",
    "Site Support": "دعم المواقع",
    "Site Support Text": "إشراف شامل على المواقع، ودعم لوجستي للمشاريع، ودعم إداري، وتنسيق لضمان سير العمليات بسلاسة.",
    "Safety & HSE": "السلامة والبيئة (HSE)", // NEW
    "Safety Text": "توفير مسؤولي سلامة متخصصين وتطبيق بروتوكولات صارمة للصحة والسلامة والبيئة في الموقع.", // NEW
    "Logistics & Transport": "اللوجستيات والنقل", // NEW
    "Logistics Text": "نقل فعال للأفراد والمعدات، ومناولة المواد، وتنسيق سلسلة التوريد للمواقع الصناعية.", // NEW
   "Network & Telecom Solutions": "حلول الشبكات والاتصالات", 
    "Network & Telecom Text": "تصميم وتركيب أنظمة كابلات البيانات والصوت. أعمال الألياف البصرية والكهرباء. كاميرات الدائرة المغلقة (CCTV).", // UPDATED CONTENT
    // Profile & Contact
    "Company Profile": "الملف التعريفي للشركة",
    "Download Company Profile": "تحميل الملف التعريفي للشركة",
    "Download": "تحميل",
    "PDF File": "ملف PDF",
    "Contact Details": "تفاصيل الاتصال",
    "Find us on Google Maps": "موقعنا على خرائط جوجل",
    "Tap to open navigation.": "انقر لفتح الملاحة.",
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

// Apply initial translations on load
window.addEventListener("load", () => {
    // Check if a language preference can be stored or default to English
    applyTranslations(EN);
});

function applyTranslations(langMap) {
    document.querySelectorAll("[data-text]").forEach(el => {
        const key = el.getAttribute("data-text");
        // Use innerText for simple text, innerHTML for potential styled content
        if (langMap[key]) el.innerHTML = langMap[key];
    });
}
