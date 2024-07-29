export function fermerConnexion() {
    const popUpBackgroundConnexion = document.querySelector(
        '.popUpBackgroundConnexion'
    )
    popUpBackgroundConnexion.onclick = (event) => {
        if (event.target === popUpBackgroundConnexion) {
            popUpBackgroundConnexion.classList.remove('active')
        }
    }
}
