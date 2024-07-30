const express = require('express')
const router = express.Router()
const UtilisateurCtrl = require('../controllers/utilisateurs')

router.post('/', UtilisateurCtrl.enregistrerUtilisateur)

module.exports = router
