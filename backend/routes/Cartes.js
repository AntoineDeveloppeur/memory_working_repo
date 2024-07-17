const express = require('express')
const router = express.Router()
const carteCtrl = require('../controllers/cartes')

router.get('/', carteCtrl.recupererToutesLesCartes)

module.exports = router
