import { fermerConnexion } from './connexion.js'
import { ouvrirInscription } from './connexion.js'
import { fermerInscription } from './connexion.js'

export async function ouvrirConnexion() {
    if (document.querySelector('.popUpBackgroundConnexion')) {
        const bouttonConnexion = document.querySelector('.boutton--connexion')
        const popUpBackgroundConnexion = document.querySelector(
            '.popUpBackgroundConnexion'
        )
        bouttonConnexion.onclick = () => {
            console.log("j'appuie sur le boutton de connexion")
            popUpBackgroundConnexion.classList.add('active')
        }
    }
    fermerConnexion()
    ouvrirInscription()
    fermerInscription()
}
