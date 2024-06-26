
import {listeTypeDeCarte, listeTypeDosDeCarte, recupererDonneesCartes} from "./jeu.js"
/**
 * @param {Number} p est la position dans le carroussel de choix du type de carte
**/
let p=0

export function ouvrirLesOptions () {
    if (document.querySelector(".grid3")) {
        const bouttonOptions = document.querySelector(".grid3")
        const popUpBackground = document.querySelector(".popUpBackground")
        bouttonOptions.onclick = () => {
            popUpBackground.classList.add("active")
        }
        afficherNomTypedeCartes()
        creerContenuCarroussel()
        afficherDifficulté()
        defilerLeCarroussel()
        fermerLesOptions()
    }
}

function creerContenuCarroussel () {
    recupererDonneesCartes ()
    let listeCarteCarroussel = document.getElementById("liste-carte-carroussel")
    listeCarteCarroussel.innerHTML=""
    for (let i=0; i< listeTypeDeCarte.length; i++) {
        const imageChoix = document.createElement("img")
        imageChoix.src = listeTypeDeCarte[i].image1
        imageChoix.classList.add("carte-carroussel")
        listeCarteCarroussel.appendChild(imageChoix)
    }
}
function afficherDifficulté() {
    recupererDonneesCartes ()
    let nombreEtoiles = document.getElementById("nombre-etoiles")
    nombreEtoiles.innerHTML = ""
    // nombreEtoiles.innerText = listeTypeDeCarte[p].difficulte
    for (let i = 0; i< listeTypeDeCarte[p].difficulte; i++) {
        const etoileJaune = document.createElement("img")
        etoileJaune.src = "images/star_1.svg"
        etoileJaune.classList.add("etoile")
        etoileJaune.alt = "etoile jaune de notation"

        nombreEtoiles.appendChild(etoileJaune)
    }
    while (nombreEtoiles.childElementCount < 5) {
        const etoileVide = document.createElement("img")
        etoileVide.src = "images/star_0.svg"
        etoileVide.classList.add("etoile")
        etoileVide.alt = "etoile vide de notation"
        nombreEtoiles.appendChild(etoileVide)
    }
}
function afficherNomTypedeCartes() {
    recupererDonneesCartes()
    let container =  document.querySelector(`#container > :first-child`)
   container.innerHTML = listeTypeDeCarte[p].nom
}

function fermerLesOptions () {
    const popUpBackground = document.querySelector(".popUpBackground")
    popUpBackground.onclick=(event) => {
        if (event.target === popUpBackground) {
            popUpBackground.classList.remove("active")
        }
    }
    const valider = document.getElementById("valider")
    valider.onclick=(event) => {
        popUpBackground.classList.remove("active")
        validerChoixTypeDeCartes ()
        
    }
}
function defilerLeCarroussel () {
    const listeCarteCarroussel = document.getElementById("liste-carte-carroussel")
    listeCarteCarroussel.style.transition = "all 0.5s ease"
    const flecheGauche = document.getElementById("gauche")
    flecheGauche.onclick=function() {
        if (p>0) {
            p--
            // listeCarteCarroussel.style.transform="transform("p*800+"px)"
            listeCarteCarroussel.style.transform = "translate("+-336*p+"px)" 
            afficherMasquerBouttons()
            afficherNomTypedeCartes()
            afficherDifficulté()
        }
    }
    const flecheDroite = document.getElementById("droite")
    flecheDroite.onclick=function() {
        if (p<3) {
            p++
            // listeCarteCarroussel.style.transform="transform("p*800+"px)"
            listeCarteCarroussel.style.transform="translate("+-336*p+"px)"
            afficherMasquerBouttons()
            afficherNomTypedeCartes()
            afficherDifficulté()
        }
    }
    
}

function afficherMasquerBouttons() {
    recupererDonneesCartes ()
    const flecheDroite = document.getElementById("droite")
    if(p==listeTypeDeCarte.length-1) {
        flecheDroite.style.visibility = "hidden"
    } else {
        flecheDroite.style.visibility = "visible"
    }
    const flecheGauche = document.getElementById("gauche")
    if(p==0) {
        flecheGauche.style.visibility = "hidden"
    } else {
        flecheGauche.style.visibility = "visible"
    }
}

function validerChoixTypeDeCartes () {
    window.localStorage.setItem("ChoixTypeDeCartes",p)
    
}
