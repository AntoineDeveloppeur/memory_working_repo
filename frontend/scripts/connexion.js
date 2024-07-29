export function fermerConnexion() {
    const popUpBackgroundConnexion = document.querySelector(
        '.popUpBackgroundConnexion'
    )
    popUpBackgroundConnexion.onclick = (event) => {
        if (event.target === popUpBackgroundConnexion) {
            console.log("j'appuie sur la popUpBackgroundConnexion")

            popUpBackgroundConnexion.classList.remove('active')
        }
    }
}

export function ouvrirInscription() {
    const popUpBackgroundInscription = document.querySelector(
        '.popUpBackgroundInscription'
    )
    const bouttonInscription = document.querySelector(
        '.popUpBackgroundConnexion__connexion__boutton--modaleInscription'
    )
    bouttonInscription.onclick = (event) => {
        console.log("j'appuie sur le boutton d'inscription")

        popUpBackgroundInscription.classList.add('active')
    }
}

export function fermerInscription() {
    const bouttonDejaMembre = document.querySelector(
        '.popUpBackgroundInscription__inscription__boutton--modaleConnexion'
    )
    const popUpBackgroundInscription = document.querySelector(
        '.popUpBackgroundInscription'
    )
    const popUpBackgroundConnexion = document.querySelector(
        '.popUpBackgroundConnexion'
    )

    bouttonDejaMembre.onclick = (event) => {
        console.log("j'appuie sur bouttondejamembre")
        popUpBackgroundInscription.classList.remove('active')
    }

    popUpBackgroundInscription.onclick = (event) => {
        if (popUpBackgroundInscription === event.target) {
            popUpBackgroundInscription.classList.remove('active')
            popUpBackgroundConnexion.classList.remove('active')
        }
    }
}
