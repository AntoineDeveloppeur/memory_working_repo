import {
    listeTypeDeCarte,
    listeTypeDosDeCarte,
    recupererDonneesCartes,
} from './jeu.js'
/**
 * @param {Number} p est la position dans le carroussel de choix du type de carte
 **/
let p = 0

export function ouvrirLesOptions() {
    if (document.querySelector('.grid3')) {
        const bouttonOptions = document.querySelector('.grid3')
        const popUpBackground = document.querySelector('.popUpBackground')
        bouttonOptions.onclick = () => {
            popUpBackground.classList.add('active')
        }
        afficherNomTypedeCartes()
        creerContenuCarroussel()
        afficherDifficulté()
        defilerLeCarroussel()
        fermerLesOptions()
    }
}

async function creerContenuCarroussel() {
    await recupererDonneesCartes()
    let listeCarteCarroussel = document.querySelector(
        '.popUpBackground__options__carroussel__container__liste-cartes'
    )
    listeCarteCarroussel.innerHTML = ''
    for (let i = 0; i < listeTypeDeCarte.length; i++) {
        const imageChoix = document.createElement('img')
        imageChoix.src = listeTypeDeCarte[i].image1
        imageChoix.classList.add(
            'popUpBackground__options__carroussel__container__liste-cartes__carte'
        )
        listeCarteCarroussel.appendChild(imageChoix)
    }
}
async function afficherDifficulté() {
    await recupererDonneesCartes()
    let nombreEtoiles = document.querySelector(
        '.popUpBackground__options__carroussel__container__etoiles'
    )
    nombreEtoiles.innerHTML = ''
    // nombreEtoiles.innerText = listeTypeDeCarte[p].difficulte
    for (let i = 0; i < listeTypeDeCarte[p].difficulte; i++) {
        const etoileJaune = document.createElement('img')
        etoileJaune.src = 'images/star_1.svg'
        etoileJaune.classList.add('etoile')
        etoileJaune.alt = 'etoile jaune de notation'

        nombreEtoiles.appendChild(etoileJaune)
    }
    while (nombreEtoiles.childElementCount < 5) {
        const etoileVide = document.createElement('img')
        etoileVide.src = 'images/star_0.svg'
        etoileVide.classList.add('etoile')
        etoileVide.alt = 'etoile vide de notation'
        nombreEtoiles.appendChild(etoileVide)
    }
}
async function afficherNomTypedeCartes() {
    await recupererDonneesCartes()
    let container = document.querySelector(
        `.popUpBackground__options__carroussel__container > :first-child`
    )
    container.innerHTML = listeTypeDeCarte[p].nom
}

function fermerLesOptions() {
    const popUpBackground = document.querySelector('.popUpBackground')
    popUpBackground.onclick = (event) => {
        if (event.target === popUpBackground) {
            popUpBackground.classList.remove('active')
        }
    }
    const valider = document.querySelector(
        '.popUpBackground__options__carroussel__container__valider'
    )
    valider.onclick = (event) => {
        popUpBackground.classList.remove('active')
        validerChoixTypeDeCartes()
    }
}
function defilerLeCarroussel() {
    const listeCarteCarroussel = document.querySelector(
        '.popUpBackground__options__carroussel__container__liste-cartes'
    )
    listeCarteCarroussel.style.transition = 'all 0.5s ease'
    const flecheGauche = document.querySelector('.fleche--gauche')
    flecheGauche.onclick = function () {
        if (p > 0) {
            p--
            // listeCarteCarroussel.style.transform="transform("p*800+"px)"
            listeCarteCarroussel.style.transform =
                'translate(' + -336 * p + 'px)'
            afficherMasquerBouttons()
            afficherNomTypedeCartes()
            afficherDifficulté()
        }
    }
    const flecheDroite = document.querySelector('.fleche--droite')
    flecheDroite.onclick = function () {
        if (p < 3) {
            p++
            // listeCarteCarroussel.style.transform="transform("p*800+"px)"
            listeCarteCarroussel.style.transform =
                'translate(' + -336 * p + 'px)'
            afficherMasquerBouttons()
            afficherNomTypedeCartes()
            afficherDifficulté()
        }
    }
}

async function afficherMasquerBouttons() {
    await recupererDonneesCartes()

    const flecheDroite = document.querySelector('.fleche--droite')
    if (p == listeTypeDeCarte.length - 1) {
        flecheDroite.style.visibility = 'hidden'
    } else {
        flecheDroite.style.visibility = 'visible'
    }
    const flecheGauche = document.querySelector('.fleche--gauche')
    if (p == 0) {
        flecheGauche.style.visibility = 'hidden'
    } else {
        flecheGauche.style.visibility = 'visible'
    }
}

function validerChoixTypeDeCartes() {
    window.localStorage.setItem('ChoixTypeDeCartes', p)
}
