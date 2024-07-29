import { fermerConnexion } from './connexion.js'

export async function ouvrirConnexion() {
    if (document.querySelector('.popUpBackgroundConnexion')) {
        const bouttonConnexion = document.querySelector('.boutton--connexion')
        const popUpBackgroundConnexion = document.querySelector(
            '.popUpBackgroundConnexion'
        )
        bouttonConnexion.onclick = () => {
            popUpBackgroundConnexion.classList.add('active')
        }
    }
    fermerConnexion()
}
