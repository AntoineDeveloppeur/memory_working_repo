const express = require('express')
const mongoose = require('mongoose')
const routerCartes = require('./routes/Cartes')
require('dotenv').config()

const app = express()

app.listen(3000)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
})

app.use(express.json())

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.fndalaw.mongodb.net/${process.env.DB_DATABASE_NAME}?retryWrites=true&w=majority&appName=${process.env.APPNAME}`
    )
    .then(() =>
        console.log(
            'Connexion à MongoDB réussie !',
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.fndalaw.mongodb.net/${process.env.DB_DATABASE_NAME}?retryWrites=true&w=majority&appName=${process.env.APPNAME}`
        )
    )
    .catch((error) => console.log('Connexion à MongoDB échouée !', error))

app.use((req, res, next) => {
    console.log('le middleware globale a été lancé')
    next()
})

app.use('/api/cartes', routerCartes)

// app.use('/', (req, res, next) => {
//     console.log('requpete vierge réussie')
//     res.status(200).json({ message: 'requête vierge réussie' })
// })
