// LifeTag JS
// Ici on ajoutera plus tard :
// - validation formulaire
// - envoi vers backend
// - animations
const languageSelector = document.getElementById("language");

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = data[key];
      });
    });
}

// لغة الهاتف تلقائياً
const userLang = navigator.language.slice(0,2);
loadLanguage(userLang);

// تبديل اللغة
languageSelector.addEventListener("change", function () {
  loadLanguage(this.value);
});
