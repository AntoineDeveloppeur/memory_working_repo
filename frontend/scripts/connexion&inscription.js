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

export async function EnregistrerUtilisateur() {
    const formulaire = document.querySelector(
        '.popUpBackgroundInscription__inscription__signUpForm'
    )

    formulaire.addEventListener('submit', async (event) => {
        event.preventDefault()
        const email = document.getElementById('email--inscription')
        console.log('email', email.value)
        const password = document.getElementById('password--inscription')
        console.log('password', password.value)
        const userData = {
            email: email.value,
            password: password.value,
        }

        try {
            const response = await fetch(
                'http://localhost:3000/api/utilisateurs',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                }
            )

            if (response.ok) {
                const result = await response.json()
                console.log("l'utilisateur a été créé avec succès")
            } else {
                const error = await response.json()
                console.log(
                    "Erreur lors de la création de l'utilisateur",
                    error
                )
            }
        } catch (error) {
            console.log(
                "erreur réseau lors de la création de l'utilisateur",
                error
            )
        }
    })
}
