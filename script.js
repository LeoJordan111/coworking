
// Gestion du choix du fond d'écran
const choixbackground = document.getElementById('bordlac')

document.getElementById('bordlac').addEventListener('change', () => {
  document.querySelector('main').setAttribute("style", "background-image: url(background/Bord_Lac.webp);")
});

document.getElementById('campagne').addEventListener('change', () => {
  document.querySelector('main').setAttribute("style", "background-image: url(background/Campagne.webp);")
});

document.getElementById('dome').addEventListener('change', () => {
  document.querySelector('main').setAttribute("style", "background-image: url(background/Puy_Dome.webp);")
});



// Gestion de l'appli "Pierre" / "Feuille" / "Ciseau"
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";

    if (joueur===robot) {
      resultat = "Egalité";
    }
    else if ((joueur === "💎 Pierre" && robot === "✂️ Ciseaux") || (joueur === "✂️ Ciseaux" && robot === "📜 Feuilles") || (joueur === "📜 Feuilles") && (robot === "💎 Pierre")) {
      resultat = "Gagné";
    }
    else {
      resultat = "Perdu";
    }
  document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot} <br/>
  Résultat : ${resultat}
  `;
  });
}