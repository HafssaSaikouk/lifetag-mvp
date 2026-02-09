const API_URL = "https://script.google.com/macros/s/AKfycbwzh__uPeuU8m9eyCO5MnEh52bYI7y8vmtxk2-q5w8ZoN1ae1u607nCi2nBK5RrS12K2Q/exec";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  document.body.innerHTML = "❌ ID manquant";
}

fetch(`${API_URL}?id=${id}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").textContent = data.fullname;
    document.getElementById("blood").textContent = data.blood;
    document.getElementById("allergy").textContent =
      data.has_allergy === "Oui" ? data.allergy_details : "Aucune";
    document.getElementById("handicap").textContent =
      data.has_handicap === "Oui" ? data.handicap_type : "Aucun";

    document.getElementById("c1").textContent =
      `${data.c1_name} (${data.c1_relation}) - ${data.c1_phone}`;
  })
  .catch(() => {
    document.body.innerHTML = "❌ Erreur de chargement";
  });
