/* ==========================================================
   GLOBAL SITE CONFIG
   ----------------------------------------------------------
   Replace these values — nothing else in the code needs to
   change. Leave linkedin/behance/github as "#" placeholders
   until you have real URLs.
   ========================================================== */
const siteConfig = {
    name: "HESHAM",
    email: "abdelhamedhesham93@gmail.com",
    whatsapp: "201016591693",
    profileImage: "assets/profile/profile.jpg",
    linkedin: "#",   // replace with your LinkedIn URL
    behance: "#",    // replace with your Behance URL
    github: "#"      // replace with your GitHub URL
};

/* ==========================================================
   TRANSLATIONS (English / Arabic)
   ----------------------------------------------------------
   Static site chrome — nav, hero, section headings, buttons.
   Project content (title/description/etc.) is translated
   inside projects.js instead, per project.
   ========================================================== */
const translations = {
    en: {
        "nav.work": "Work", "nav.services": "Services", "nav.about": "About", "nav.contact": "Contact",
        "hero.subtitle": "AI Visuals & Digital Experiences",
        "hero.text": "I create cinematic AI visuals, digital experiences, and premium creative content.",
        "hero.ctaWork": "View My Work", "hero.ctaContact": "Let's Work Together", "hero.scroll": "Scroll",
        "work.heading": "Selected Work",
        "work.note": "A working record of recent AI-driven commercial and design projects.",
        "services.heading": "What I Create",
        "about.heading1": "Creative Technology.", "about.heading2": "Visual Storytelling.",
        "about.text": "I combine AI, design, visual storytelling and technology to create premium digital experiences.",
        "skills.aiVideo": "AI Video", "skills.photoshop": "Photoshop", "skills.capcut": "CapCut",
        "skills.aiImage": "AI Image Generation", "skills.webDesign": "Web Design",
        "contact.eyebrow": "Available for freelance projects",
        "contact.title": "Let's create something extraordinary.",
        "contact.cta": "Start a Project",
        "footer.tagline": "AI Visuals • Digital Design", "footer.top": "Back to top ↑",
        "overlay.close": "Close", "overlay.prev": "Previous", "overlay.next": "Next",
        "project.view": "View Project", "project.about": "About", "project.role": "Role",
        "project.tools": "Tools", "project.process": "Process", "project.outcome": "Outcome",
        "project.visitSite": "Visit Live Site →"
    },
    ar: {
        "nav.work": "أعمالي", "nav.services": "خدماتي", "nav.about": "نبذة", "nav.contact": "تواصل",
        "hero.subtitle": "رؤى بصرية بالذكاء الاصطناعي وتجارب رقمية",
        "hero.text": "أصنع رؤى بصرية سينمائية بالذكاء الاصطناعي وتجارب رقمية ومحتوى إبداعي مميز.",
        "hero.ctaWork": "شاهد أعمالي", "hero.ctaContact": "لنعمل معًا", "hero.scroll": "مرر للأسفل",
        "work.heading": "أعمال مختارة",
        "work.note": "سجل عملي لأحدث المشاريع الإعلانية والتصميمية المدعومة بالذكاء الاصطناعي.",
        "services.heading": "ماذا أقدّم",
        "about.heading1": "تقنية إبداعية.", "about.heading2": "سرد بصري.",
        "about.text": "أجمع بين الذكاء الاصطناعي والتصميم والسرد البصري والتقنية لصنع تجارب رقمية مميزة.",
        "skills.aiVideo": "فيديو بالذكاء الاصطناعي", "skills.photoshop": "فوتوشوب", "skills.capcut": "كاب كت",
        "skills.aiImage": "توليد صور بالذكاء الاصطناعي", "skills.webDesign": "تصميم مواقع",
        "contact.eyebrow": "متاح للعمل الحر",
        "contact.title": "لنصنع شيئًا استثنائيًا.",
        "contact.cta": "ابدأ مشروعًا",
        "footer.tagline": "رؤى بصرية • تصميم رقمي", "footer.top": "العودة للأعلى ↑",
        "overlay.close": "إغلاق", "overlay.prev": "السابق", "overlay.next": "التالي",
        "project.view": "عرض المشروع", "project.about": "نبذة", "project.role": "الدور",
        "project.tools": "الأدوات", "project.process": "العملية", "project.outcome": "النتيجة",
        "project.visitSite": "زيارة الموقع ←"
    }
};

/* ==========================================================
   SERVICES DATA
   ========================================================== */
const servicesData = [
    { icon: "video", key: "aiVideo" },
    { icon: "commercial", key: "aiCommercials" },
    { icon: "brush", key: "photoshop" },
    { icon: "grid", key: "social" },
    { icon: "globe", key: "website" },
    { icon: "compass", key: "direction" }
];
translations.en.services = {
    aiVideo: { title: "AI Video Creation", text: "Cinematic, AI-generated video content built for brands that want to look premium." },
    aiCommercials: { title: "AI Commercials", text: "Concept-to-finish AI commercials with a cinematic, story-led feel." },
    photoshop: { title: "Photoshop & Graphic Design", text: "Photoshop-driven design and art direction that gives a brand a distinct visual voice." },
    social: { title: "Social Media Design", text: "Cohesive visual campaigns — posts, stories and offers — designed with editorial precision." },
    website: { title: "AI Website Design", text: "AI-assisted design for digital experiences that feel intentional and modern." },
    direction: { title: "Creative Direction", text: "Guiding the visual language of a project from concept through to final delivery." }
};
translations.ar.services = {
    aiVideo: { title: "إنتاج فيديو بالذكاء الاصطناعي", text: "محتوى فيديو سينمائي مصنوع بالذكاء الاصطناعي لعلامات تجارية تريد مظهرًا فاخرًا." },
    aiCommercials: { title: "إعلانات بالذكاء الاصطناعي", text: "إعلانات كاملة من الفكرة حتى التنفيذ بأسلوب سينمائي قصصي." },
    photoshop: { title: "فوتوشوب وتصميم جرافيك", text: "تصميم وإخراج فني عبر فوتوشوب يمنح العلامة التجارية هوية بصرية مميزة." },
    social: { title: "تصميم سوشيال ميديا", text: "حملات بصرية متكاملة — منشورات وستوريز وعروض — بدقة تحريرية." },
    website: { title: "تصميم مواقع بالذكاء الاصطناعي", text: "تصميم مواقع مدعوم بالذكاء الاصطناعي لتجارب رقمية عصرية ومقصودة." },
    direction: { title: "الإخراج الفني", text: "توجيه اللغة البصرية للمشروع من الفكرة وحتى التسليم النهائي." }
};

const serviceIcons = {
    video: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="14" height="12" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M16 10l6-3v10l-6-3" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    commercial: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M16 9a4 4 0 0 1 0 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    brush: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20c0-3 2-4 4-4s3 1 3 3-2 3-4 3-3-1-3-2Z" stroke="currentColor" stroke-width="1.3"/><path d="M9.5 14 19 4.5a1.7 1.7 0 0 1 2.4 2.4L12 16.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.3"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.3"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" stroke="currentColor" stroke-width="1.3"/></svg>`,
    compass: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.3"/><path d="m15 9-2 6-6 2 2-6 6-2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`
};

const socialIcons = {
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C10.2 9 9.7 7.8 9.5 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3ZM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="m4 6.5 8 6.5 8-6.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5A1.96 1.96 0 1 0 5.28 7.4a1.96 1.96 0 0 0-.03-3.9ZM20.5 20h-3.37v-6.06c0-1.44-.03-3.3-2.02-3.3-2.02 0-2.33 1.58-2.33 3.2V20H9.4V8.5h3.24v1.57h.05a3.56 3.56 0 0 1 3.2-1.76c3.43 0 4.06 2.25 4.06 5.18V20Z"/></svg>`,
    behance: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 12.3c.9-.4 1.4-1.2 1.4-2.3 0-2-1.5-3-3.9-3H1v10.9h4.5c2.6 0 4.2-1.1 4.2-3.3 0-1.3-.7-2.1-1.9-2.3ZM3.4 9h2c1 0 1.7.4 1.7 1.3 0 .9-.6 1.4-1.7 1.4h-2V9Zm2.3 6.9H3.4v-3H5.8c1.2 0 1.9.5 1.9 1.5 0 1-.7 1.5-2 1.5ZM23 13.8c0-2.8-1.6-4.7-4.3-4.7-2.7 0-4.5 2-4.5 4.6 0 2.7 1.7 4.6 4.6 4.6 1.9 0 3.4-.8 4-2.3h-2c-.3.6-.9.9-1.9.9-1.3 0-2.2-.7-2.4-2.1h6.5v-.9Zm-6.4-1.1c.2-1.1 1-1.8 2.1-1.8 1.2 0 1.9.7 2 1.8h-4.1ZM14.7 6.7h5.1V7.9h-5.1Z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`
};

let currentLang = localStorage.getItem("lang") || "en";
let currentTheme = localStorage.getItem("theme") || "dark";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(currentTheme, false);
    applyLang(currentLang, false);

    initPreloader();
    initCursor();
    initNav();
    initMobileNav();
    initScrollReveal();
    initParallax();
    initMagnetic();
    initThemeToggle();
    initLangToggle();
    initContact();
    initBackToTop();
    initProfileImage();
    renderServices();
    renderWorkGrid();
    initOverlay();
    initLightbox();
});

/* ==========================================================
   THEME (dark / light)
   ========================================================== */
function applyTheme(theme, animate){
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeToggle");
    if(btn){ btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode"); }
}
function initThemeToggle(){
    const btn = document.getElementById("themeToggle");
    if(!btn) return;
    btn.addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", currentTheme);
        applyTheme(currentTheme, true);
    });
}

/* ==========================================================
   LANGUAGE (English / Arabic, no reload)
   ========================================================== */
function applyLang(lang, rerender){
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = translations[lang][key];
        if(value) el.textContent = value;
    });

    const langLabel = document.getElementById("langToggleLabel");
    if(langLabel) langLabel.textContent = lang === "ar" ? "EN" : "AR";

    const emailSpan = document.getElementById("mobileNavEmail");
    if(emailSpan) emailSpan.textContent = siteConfig.email;

    if(rerender){
        renderServices();
        renderWorkGrid();
    }
}
function initLangToggle(){
    const btn = document.getElementById("langToggle");
    if(!btn) return;
    btn.addEventListener("click", () => {
        const next = currentLang === "en" ? "ar" : "en";
        localStorage.setItem("lang", next);
        applyLang(next, true);
    });
}

/* Pulls the right string out of a plain string OR a {en, ar} object */
function t(field){
    if(field === undefined || field === null) return "";
    if(typeof field === "string") return field;
    return field[currentLang] || field.en || "";
}

/* ==========================================================
   PRELOADER
   ========================================================== */
function initPreloader(){
    const pre = document.getElementById("preloader");
    const count = document.getElementById("preloaderCount");
    if(!pre) return;
    if(reducedMotion){ pre.setAttribute("data-hidden","true"); return; }

    const duration = 1400;
    const start = performance.now();
    function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        count.textContent = String(Math.floor(progress * 100)).padStart(2,"0");
        if(progress < 1){ requestAnimationFrame(tick); }
        else{
            setTimeout(() => {
                pre.setAttribute("data-hidden","true");
                playHeroIntro();
            }, 200);
        }
    }
    requestAnimationFrame(tick);
}
function playHeroIntro(){
    document.querySelectorAll(".reveal-line span, .hero-subtitle, .hero-text, .hero-ctas").forEach((el, i) => {
        el.style.transition = `opacity .9s cubic-bezier(.16,.84,.44,1) ${i * 0.08}s, transform .9s cubic-bezier(.16,.84,.44,1) ${i * 0.08}s`;
        requestAnimationFrame(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; });
    });
}

/* ==========================================================
   CUSTOM CURSOR
   ========================================================== */
function initCursor(){
    if(isTouch || reducedMotion) return;
    document.documentElement.classList.add("has-cursor");
    const cursor = document.getElementById("cursor");
    const glow = document.getElementById("cursorGlow");
    const label = document.getElementById("cursorLabel");
    let mx = 0, my = 0, gx = 0, gy = 0;

    window.addEventListener("mousemove", (e) => {
        mx = e.clientX; my = e.clientY;
        cursor.style.transform = `translate(${mx}px, ${my}px)`;
    }, { passive:true });

    function glowLoop(){
        gx += (mx - gx) * 0.08; gy += (my - gy) * 0.08;
        glow.style.transform = `translate(${gx}px, ${gy}px)`;
        requestAnimationFrame(glowLoop);
    }
    requestAnimationFrame(glowLoop);

    document.querySelectorAll("[data-magnetic], a, button").forEach(el => {
        el.addEventListener("mouseenter", () => { if(!cursor.hasAttribute("data-state")) cursor.setAttribute("data-state","cta"); });
        el.addEventListener("mouseleave", () => { if(cursor.getAttribute("data-state") === "cta") cursor.removeAttribute("data-state"); });
    });
}
function rebindCursorForCards(){
    if(isTouch || reducedMotion) return;
    const cursor = document.getElementById("cursor");
    const label = document.getElementById("cursorLabel");
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", () => { cursor.setAttribute("data-state","project"); label.textContent = translations[currentLang]["project.view"]; });
        card.addEventListener("mouseleave", () => cursor.removeAttribute("data-state"));
    });
}

/* ==========================================================
   NAVIGATION
   ========================================================== */
function initNav(){
    const header = document.getElementById("siteHeader");
    if(!header) return;
    function onScroll(){ header.setAttribute("data-scrolled", window.scrollY > 40 ? "true" : "false"); }
    window.addEventListener("scroll", onScroll, { passive:true });
    onScroll();
}
function initMobileNav(){
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mobileNav");
    if(!toggle || !nav) return;
    function close(){ nav.setAttribute("data-open","false"); toggle.setAttribute("aria-expanded","false"); }
    function open(){ nav.setAttribute("data-open","true"); toggle.setAttribute("aria-expanded","true"); }
    toggle.addEventListener("click", () => nav.getAttribute("data-open") === "true" ? close() : open());
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
}

/* ==========================================================
   SCROLL REVEAL
   ========================================================== */
function initScrollReveal(){
    const targets = document.querySelectorAll("[data-reveal]");
    if(reducedMotion){ targets.forEach(t2 => t2.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("is-visible"); io.unobserve(entry.target); } });
    }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(t2 => io.observe(t2));
}
function observeNewReveals(){
    const targets = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    if(reducedMotion){ targets.forEach(t2 => t2.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("is-visible"); io.unobserve(entry.target); } });
    }, { threshold: 0.2 });
    targets.forEach(t2 => io.observe(t2));
}

/* ==========================================================
   PARALLAX (hero glow only)
   ========================================================== */
function initParallax(){
    const glow = document.querySelector(".hero-glow");
    if(!glow || reducedMotion) return;
    let ticking = false;
    window.addEventListener("scroll", () => {
        if(ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            glow.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.15}px))`;
            ticking = false;
        });
    }, { passive:true });
}

/* ==========================================================
   MAGNETIC BUTTONS
   ========================================================== */
function initMagnetic(){
    if(isTouch || reducedMotion) return;
    document.querySelectorAll("[data-magnetic]").forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const r = el.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;
            el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
        });
        el.addEventListener("mouseleave", () => { el.style.transform = "translate(0,0)"; });
    });
}

/* ==========================================================
   PROFILE PHOTO
   ========================================================== */
function initProfileImage(){
    const img = document.getElementById("profileImage");
    if(!img) return;
    img.src = siteConfig.profileImage;
    img.addEventListener("error", () => img.setAttribute("data-broken", "true"));
}

/* ==========================================================
   CONTACT ICONS
   ========================================================== */
function initContact(){
    const startProject = document.getElementById("startProjectLink");
    const mailUrl = `mailto:${siteConfig.email}`;
    if(startProject) startProject.href = mailUrl;

    const icons = document.getElementById("contactIcons");
    if(!icons) return;

    const items = [
        { key: "whatsapp", href: `https://wa.me/${siteConfig.whatsapp}`, label: "WhatsApp", external: true },
        { key: "email", href: mailUrl, label: "Email", external: false },
        { key: "linkedin", href: siteConfig.linkedin, label: "LinkedIn", external: true },
        { key: "behance", href: siteConfig.behance, label: "Behance", external: true },
        { key: "github", href: siteConfig.github, label: "GitHub", external: true }
    ];

    icons.innerHTML = items.map(item => `
        <a class="contact-icon-link" href="${item.href}" aria-label="${item.label}" title="${item.label}"
           ${item.external ? 'target="_blank" rel="noopener"' : ""} data-magnetic>
            ${socialIcons[item.key]}
        </a>
    `).join("");
}

/* ==========================================================
   BACK TO TOP
   ========================================================== */
function initBackToTop(){
    const btn = document.getElementById("backToTop");
    if(!btn) return;
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));
}

/* ==========================================================
   SERVICES RENDERING
   ========================================================== */
function renderServices(){
    const list = document.getElementById("servicesList");
    if(!list) return;
    const dict = translations[currentLang].services;
    list.innerHTML = servicesData.map(s => `
        <article class="service-row" data-reveal>
            <span class="service-icon">${serviceIcons[s.icon]}</span>
            <div class="service-body">
                <h3>${escapeHTML(dict[s.key].title)}</h3>
                <p>${escapeHTML(dict[s.key].text)}</p>
            </div>
        </article>
    `).join("");
    observeNewReveals();
}

/* ==========================================================
   PROJECT GRID — reads projects.js, builds every card
   ========================================================== */
function renderWorkGrid(){
    const grid = document.getElementById("workGrid");
    if(!grid || typeof projects === "undefined") return;

    grid.innerHTML = projects.map((p, index) => `
        <article class="project-card" data-index="${index}" tabindex="0" role="button" aria-label="Open ${escapeHTML(t(p.title))} case study">
            <span class="project-num">${escapeHTML(p.number)}</span>
            <div class="project-media">
                ${p.type === "video"
                    ? `<video src="${escapeHTML(p.media)}" data-fallback="${escapeHTML(p.thumbnail)}" poster="${escapeHTML(p.thumbnail)}" muted autoplay loop playsinline aria-label="${escapeHTML(t(p.title))} preview"></video>`
                    : `<img src="${escapeHTML(p.thumbnail)}" alt="${escapeHTML(t(p.title))} thumbnail" loading="lazy">`
                }
                <span class="project-view">${escapeHTML(translations[currentLang]["project.view"])}</span>
            </div>
            <div class="project-info">
                <h3>${escapeHTML(t(p.title))}</h3>
                <p>${escapeHTML(t(p.category))}</p>
            </div>
        </article>
    `).join("");

    grid.querySelectorAll(".project-media video[data-fallback]").forEach(vid => {
        vid.addEventListener("error", () => {
            const img = document.createElement("img");
            img.src = vid.dataset.fallback;
            img.alt = vid.getAttribute("aria-label") || "Project thumbnail";
            img.loading = "lazy";
            vid.replaceWith(img);
        });
    });

    grid.querySelectorAll(".project-card").forEach(card => {
        const idx = Number(card.dataset.index);
        card.addEventListener("click", () => openProject(idx));
        card.addEventListener("keydown", (e) => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openProject(idx); } });
    });

    rebindCursorForCards();
    observeNewReveals();
}

function escapeHTML(str){
    const div = document.createElement("div");
    div.textContent = String(str ?? "");
    return div.innerHTML;
}

/* ==========================================================
   PROJECT CASE-STUDY OVERLAY
   ========================================================== */
let currentProjectIndex = 0;

function initOverlay(){
    const overlay = document.getElementById("projectOverlay");
    const closeBtn = document.getElementById("overlayClose");
    const prevBtn = document.getElementById("prevProject");
    const nextBtn = document.getElementById("nextProject");
    if(!overlay) return;

    closeBtn.addEventListener("click", closeProject);
    prevBtn.addEventListener("click", () => openProject((currentProjectIndex - 1 + projects.length) % projects.length));
    nextBtn.addEventListener("click", () => openProject((currentProjectIndex + 1) % projects.length));

    document.addEventListener("keydown", (e) => {
        if(overlay.getAttribute("data-open") !== "true") return;
        if(e.key === "Escape") closeProject();
        if(e.key === "ArrowRight") nextBtn.click();
        if(e.key === "ArrowLeft") prevBtn.click();
    });
}

function openProject(index){
    currentProjectIndex = index;
    const p = projects[index];
    if(!p) return;

    const overlay = document.getElementById("projectOverlay");
    const content = document.getElementById("overlayContent");
    const progress = document.getElementById("overlayProgress");
    const scrollArea = document.getElementById("overlayScroll");
    const dict = translations[currentLang];

    progress.textContent = `${p.number} / ${String(projects.length).padStart(2,"0")}`;

    content.innerHTML = `
        <div class="cs-head">
            <span class="cs-num">${escapeHTML(p.number)}</span>
            <h2 class="cs-title">${escapeHTML(t(p.title))}</h2>
            ${p.subtitle ? `<p class="cs-subtitle">${escapeHTML(t(p.subtitle))}</p>` : ""}
            ${p.year ? `<span class="cs-year">${escapeHTML(p.year)}</span>` : ""}
        </div>

        ${renderMedia(p)}

        <div class="cs-meta">
            <div class="cs-meta-block">
                <h4>${escapeHTML(dict["project.about"])}</h4>
                <p class="cs-desc">${escapeHTML(t(p.description))}</p>
            </div>
            <div class="cs-meta-block">
                <h4>${escapeHTML(dict["project.role"])}</h4>
                <ul>${tList(p.role).map(r => `<li>${escapeHTML(r)}</li>`).join("")}</ul>
            </div>
            <div class="cs-meta-block">
                <h4>${escapeHTML(dict["project.tools"])}</h4>
                <ul>${(p.tools || []).map(tool => `<li>${escapeHTML(tool)}</li>`).join("")}</ul>
            </div>
        </div>

        ${p.process ? `<div class="cs-process"><h4>${escapeHTML(dict["project.process"])}</h4><p>${escapeHTML(t(p.process))}</p></div>` : ""}
        ${p.outcome ? `<div class="cs-outcome"><h4>${escapeHTML(dict["project.outcome"])}</h4><p>${escapeHTML(t(p.outcome))}</p></div>` : ""}

        ${p.quote ? `<p class="cs-quote">${escapeHTML(t(p.quote))}</p>` : ""}
    `;

    scrollArea.scrollTo({ top: 0 });
    overlay.setAttribute("data-open","true");
    document.body.classList.add("overlay-open");

    const vid = content.querySelector("video[data-fallback]");
    if(vid){
        vid.addEventListener("error", () => {
            const img = document.createElement("img");
            img.src = vid.dataset.fallback;
            img.alt = `${t(p.title)} preview`;
            vid.replaceWith(img);
        });
    }

    // wire up gallery images to open the lightbox
    content.querySelectorAll(".cs-gallery-item").forEach((item, i) => {
        item.addEventListener("click", () => openLightbox(p, i));
    });
}

function closeProject(){
    const overlay = document.getElementById("projectOverlay");
    overlay.setAttribute("data-open","false");
    document.body.classList.remove("overlay-open");
}

/* Role/tools can be a plain array or a {en:[...], ar:[...]} object */
function tList(field){
    if(!field) return [];
    if(Array.isArray(field)) return field;
    return field[currentLang] || field.en || [];
}

/* Chooses the right markup block based on project.type. Every
   media type is shown at full size — nothing is ever cropped. */
function renderMedia(p){
    const dict = translations[currentLang];
    switch(p.type){
        case "video":
            // Full case-study video: user-controlled, original aspect
            // ratio via object-fit:contain, original audio intact.
            return `
                <div class="cs-media">
                    <div class="cs-media-video">
                        <video src="${escapeHTML(p.media)}" data-fallback="${escapeHTML(p.thumbnail)}" poster="${escapeHTML(p.thumbnail)}" controls playsinline preload="metadata"></video>
                    </div>
                </div>`;

        case "gallery":
            return `
                <div class="cs-media">
                    <div class="cs-gallery">
                        ${(p.media || []).map(item => `
                            <div class="cs-gallery-item" role="button" tabindex="0" aria-label="Open image">
                                <img src="${escapeHTML(item.src)}" alt="${escapeHTML(t(item.label) || t(p.title))}" loading="lazy">
                                ${item.label ? `<span>${escapeHTML(t(item.label))}</span>` : ""}
                            </div>
                        `).join("")}
                    </div>
                </div>`;

        case "website":
            return `
                <div class="cs-media">
                    <div class="cs-media-website">
                        <div class="browser-bar"><span></span><span></span><span></span></div>
                        <img src="${escapeHTML(p.media)}" alt="${escapeHTML(t(p.title))} website preview" loading="lazy">
                    </div>
                    ${p.url ? `<a class="cs-live-link" href="${escapeHTML(p.url)}" target="_blank" rel="noopener">${escapeHTML(dict["project.visitSite"])}</a>` : ""}
                </div>`;

        case "mixed":
            return `
                <div class="cs-media">
                    <div class="cs-mixed">
                        ${(p.media || []).map(item => item.type === "video"
                            ? `<video src="${escapeHTML(item.src)}" controls playsinline></video>`
                            : `<img src="${escapeHTML(item.src)}" alt="${escapeHTML(t(p.title))}" loading="lazy">`
                        ).join("")}
                    </div>
                </div>`;

        case "image":
        default:
            return `
                <div class="cs-media">
                    <img src="${escapeHTML(p.media)}" alt="${escapeHTML(t(p.title))}" loading="lazy">
                </div>`;
    }
}

/* ==========================================================
   LIGHTBOX — enlarge gallery images, with next/prev + ESC
   ========================================================== */
let lightboxProject = null;
let lightboxIndex = 0;

function initLightbox(){
    const box = document.getElementById("lightbox");
    if(!box) return;
    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
    document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));

    document.addEventListener("keydown", (e) => {
        if(box.getAttribute("data-open") !== "true") return;
        if(e.key === "Escape") closeLightbox();
        if(e.key === "ArrowRight") stepLightbox(1);
        if(e.key === "ArrowLeft") stepLightbox(-1);
    });
}

function openLightbox(project, index){
    lightboxProject = project;
    lightboxIndex = index;
    showLightboxImage();
    document.getElementById("lightbox").setAttribute("data-open", "true");
    document.body.classList.add("overlay-open");
}
function stepLightbox(dir){
    if(!lightboxProject) return;
    const total = lightboxProject.media.length;
    lightboxIndex = (lightboxIndex + dir + total) % total;
    showLightboxImage();
}
function showLightboxImage(){
    const item = lightboxProject.media[lightboxIndex];
    document.getElementById("lightboxImg").src = item.src;
    document.getElementById("lightboxImg").alt = t(item.label) || t(lightboxProject.title);
    document.getElementById("lightboxCaption").textContent = t(item.label) || "";
}
function closeLightbox(){
    document.getElementById("lightbox").setAttribute("data-open", "false");
    document.body.classList.remove("overlay-open");
}
