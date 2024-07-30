const Cartes = require('../models/cartes')

exports.recupererToutesLesCartes = (req, res, next) => {
    //aller chercher dans la base de données les cartes
    Cartes.find()
        .then((cartes) => {
            res.status(200).json(cartes)
        })
        .catch((error) => {
            console.log(
                'je suis dans le error de récupérer toutes les cartes',
                error
            )
            res.status(400).json({ error })
        })
}
