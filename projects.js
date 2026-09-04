/* ==========================================================
   PROJECT DATABASE
   ----------------------------------------------------------
   This is the ONLY file you touch to manage your work. The
   site reads this array and builds every project card, the
   full case-study view, the lightbox, and prev/next nav from
   it automatically — you never edit index.html for a project.

   HOW TO ADD A NEW PROJECT
   1. Create a folder inside /assets, e.g. assets/aura/
   2. Put your images/video inside that folder.
   3. Copy one full project object below (or the TEMPLATE at
      the bottom of this file).
   4. Paste it into the array and fill in the fields.
   5. Save. Refresh the site. Done — no HTML editing.

   BILINGUAL FIELDS
   Any field a visitor reads (title, category, subtitle,
   description, role, tools) can be either a plain string
   (shown in both languages) or an { en, ar } object if you
   want a different Arabic version. If you only fill in "en",
   the English text is shown in Arabic mode too — nothing
   breaks.

   SUPPORTED "type" VALUES
   - "video"   → one large video player. Always shown at its
                 original aspect ratio (object-fit: contain) —
                 never cropped or stretched.
   - "image"   → one single large image, fully visible.
   - "gallery" → an array of images in an editorial layout.
                 Click any image to open the lightbox.
   - "website" → a screenshot in a browser-style frame, plus
                 an optional "url" for a live-site button.
   - "mixed"   → an array of { type: "image"|"video", src }
                 items, for case studies that combine both.

   Every media type is displayed in full — nothing is cropped,
   anywhere on the site (cards, case study, or lightbox).
   ========================================================== */

const projects = [

    // ---------------- PROJECT 01 — NOVA ----------------
    {
        id: "nova",
        number: "01",
        title: "NOVA",
        category: { en: "AI COMMERCIAL", ar: "إعلان بالذكاء الاصطناعي" },
        subtitle: { en: "LUXURY PERFUME — AI COMMERCIAL", ar: "عطر فاخر — إعلان بالذكاء الاصطناعي" },
        description: {
            en: "A cinematic AI-generated perfume campaign exploring luxury, atmosphere, light and visual storytelling.",
            ar: "حملة إعلانية سينمائية لعطر فاخر، من إنتاج الذكاء الاصطناعي، تستكشف الفخامة والأجواء والضوء والسرد البصري."
        },
        quote: { en: "Luxury is not seen. It is felt.", ar: "الفخامة لا تُرى، بل تُشعر." },
        type: "video",
        thumbnail: "assets/nova/thumbnail.jpg",
        media: "assets/nova/nova.mp4",
        year: "",
        tools: ["AI", "Photoshop", "CapCut"],
        role: {
            en: ["AI Video", "Art Direction", "Editing"],
            ar: ["فيديو بالذكاء الاصطناعي", "إخراج فني", "مونتاج"]
        }
    },

    // ---------------- PROJECT 02 — LUNA ----------------
    {
        id: "luna",
        number: "02",
        title: "LUNA",
        category: { en: "SOCIAL MEDIA / ART DIRECTION", ar: "سوشيال ميديا / إخراج فني" },
        subtitle: { en: "FINE DINING — VISUAL IDENTITY", ar: "مطعم راقٍ — هوية بصرية" },
        description: {
            en: "A luxury social media campaign designed for a modern fine-dining restaurant, combining cinematic food photography with refined editorial typography.",
            ar: "حملة سوشيال ميديا فاخرة لمطعم راقٍ، تجمع بين تصوير سينمائي للأطباق وطباعة تحريرية أنيقة."
        },
        type: "gallery",
        thumbnail: "assets/Luna//hero.jpg",
        media: [
            { src: "assets/Luna/hero.jpg",    label: { en: "Hero Instagram Post", ar: "منشور إنستغرام رئيسي" } },
            { src: "assets/Luna//weekend.jpg", label: { en: "Weekend Offer — 20% Off", ar: "عرض نهاية الأسبوع — خصم 20%" } },
            { src: "assets/Luna//story.jpg",   label: { en: "Instagram Story", ar: "ستوري إنستغرام" } }
        ],
        year: "",
        tools: ["Photoshop", "AI", "Graphic Design"],
        role: {
            en: ["Art Direction", "Social Media Design"],
            ar: ["إخراج فني", "تصميم سوشيال ميديا"]
        }
    }

,{
    id: "aurel",
    number: "03",
    title: "AUREL",
    category: {
        en: "AI COMMERCIAL",
        ar: "إعلان بالذكاء الاصطناعي"
    },
    subtitle: {
        en: "Luxury Watch Campaign",
        ar: "حملة إعلانية لساعة فاخرة"
    },
    description: {
        en: "A cinematic AI-generated commercial created for AUREL, combining luxury visuals, dramatic lighting and premium watch cinematography.",
        ar: "إعلان سينمائي تم إنشاؤه بالذكاء الاصطناعي لعلامة AUREL، يجمع بين المشاهد الفاخرة والإضاءة الدرامية والتصوير السينمائي للساعة."
    },
    quote: "",
    type: "video",
    thumbnail: "assets/aurel/thumbnail.jpg",
    media: "assets/aurel/aurel.mp4",
    url: "",
    year: "2026",
    tools: ["AI", "Video Editing", "CapCut", "Photoshop"],
    role: {
        en: ["AI Video Production", "Creative Direction", "Video Editing"],
        ar: ["إنتاج فيديو بالذكاء الاصطناعي", "إخراج إبداعي", "مونتاج"]
    }
}

    ,{
    id: "nexa",
    number: "04",
    title: "NEXA",
    category: {
        en: "WEB DESIGN / AI PRODUCT",
        ar: "تصميم مواقع / منتج بالذكاء الاصطناعي"
    },
    subtitle: {
        en: "AI SaaS Landing Page",
        ar: "واجهة هبوط لمنصة SaaS بالذكاء الاصطناعي"
    },
    description: {
        en: "A premium AI SaaS landing page designed and developed for NEXA, combining editorial typography, futuristic visuals, subtle motion and a conversion-focused interface.",
        ar: "واجهة هبوط فاخرة لمنصة SaaS بالذكاء الاصطناعي باسم NEXA، تجمع بين الخطوط التحريرية والمشاهد المستقبلية والحركة البصرية الخفيفة وتجربة مستخدم تركز على التحويل."
    },
    quote: "",
    type: "website",
    thumbnail: "assets/nexa/thumbnail.jpg",
    media: "assets/nexa/thumbnail.jpg",
    url: "https://heshamcyber00.github.io/hesham-portfolio/assets/nexa/",
    year: "2026",
    tools: ["HTML", "CSS", "JavaScript", "AI"],
    role: {
        en: ["Web Design", "AI-Assisted Development", "Frontend Development"],
        ar: ["تصميم مواقع", "تطوير بمساعدة الذكاء الاصطناعي", "تطوير واجهات أمامية"]
    }
}


    /* ==========================================================
       ADD NEW PROJECTS HERE
       ----------------------------------------------------------
       Copy everything between the curly braces (including the
       braces) and paste it above this comment, right after a
       comma on the previous project's closing brace.

    ,{
        id: "project-name",
        number: "03",
        title: "PROJECT NAME",
        category: { en: "PROJECT CATEGORY", ar: "تصنيف المشروع" },
        subtitle: { en: "SHORT — SUBTITLE", ar: "عنوان فرعي قصير" },
        description: { en: "Short project description.", ar: "وصف قصير للمشروع." },
        quote: "",                          // optional, "" to skip
        type: "image",                       // video | image | gallery | website | mixed
        thumbnail: "assets/project-name/cover.jpg",
        media: "assets/project-name/image.jpg",
        url: "",                             // only used when type is "website"
        year: "",                            // optional, "" to skip
        tools: ["Photoshop", "AI"],
        role: { en: ["Art Direction", "Design"], ar: ["إخراج فني", "تصميم"] }
    }

       ADDING EACH PROJECT TYPE — QUICK REFERENCE
       - VIDEO:   type:"video",   thumbnail: cover image, media: "path/to/file.mp4"
       - IMAGE:   type:"image",   thumbnail: same image or a crop, media: "path/to/image.jpg"
       - GALLERY: type:"gallery", media: [{ src, label }, { src, label }, ...]
       - WEBSITE: type:"website", media: "path/to/screenshot.jpg", url: "https://..."
       ========================================================== */
];
