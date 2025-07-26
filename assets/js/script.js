// Générer un nombre aléatoire

let randomNumber = Math.floor(Math.random()*100 + 1);

let essais = 0;
let maxEssais = 5;

let devinettes = [];


const INPUT = document.querySelector("#guess");
const VALIDE = document.querySelector("#valide");
const MESSAGE = document.getElementById("message")
const ESSAI = document.getElementById("essai");
const REJOUER = document.getElementById("rejouer");

function devine(){
    let userGuess = Number(INPUT.value);

    if(!userGuess || userGuess < 1 || userGuess > 100) {
        MESSAGE.textContent = "Entre un nombre valide entre 1 et 100";
        return;
    }

    essais++;
    devinettes.push(userGuess);
    ESSAI.textContent = "Essais : " + devinettes.join(", ");

    if (userGuess === randomNumber) {
        MESSAGE.textContent = `Bravo  ! Tu as trouvé en ${essais} essais`;
        MESSAGE.style.color="green";
        finJeu();
    } else if (essais >= maxEssais) {
        MESSAGE.textContent = `Perdu ! Le nombre était ${randomNumber}`;
        MESSAGE.style.color="red";
        finJeu();
    } else {
        MESSAGE.textContent = userGuess < randomNumber ? "Trop bas !" : "Trop haut";
    }


    INPUT.value = "";

}

// Fin du jeu

function finJeu() {
    INPUT.disabled = true;
    VALIDE.disabled = true;
    REJOUER.style.display="inline-block";
}

// Redémarrer le jeu

function recommencer() {
    randomNumber = Math.floor(Math.random()*100)+1;
    essais = 0;
    devinettes = [];
    INPUT.disabled = false;
    VALIDE.disabled = false;
    INPUT.value = "";
    MESSAGE.textContent = "";
    ESSAI = "Essais : ";
    REJOUER.style.display="none";
}

VALIDE.addEventListener('click',devine);
REJOUER.addEventListener('click', recommencer);



