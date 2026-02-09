// ================================
// LANG SWITCH SYSTEM - LifeTag
// ================================

// اللغة الافتراضية
const DEFAULT_LANG = "fr";

// تحميل اللغة
async function loadLanguage(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    const data = await response.json();

    // بدّل النصوص
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (data[key]) {
        el.textContent = data[key];
      }
    });

    // اتجاه الصفحة (RTL للعربية فقط)
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", lang);
    }

    // خزّن اللغة
    localStorage.setItem("lang", lang);

  } catch (error) {
    console.error("Erreur chargement langue :", error);
  }
}

// تغيير اللغة عند الضغط
function setLanguage(lang) {
  loadLanguage(lang);
}

// عند فتح أي صفحة
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
  loadLanguage(savedLang);
});
