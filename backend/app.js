const express = require('express')
const mongoose = require('mongoose')
const routerCartes = require('./routes/Cartes')

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
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.fndalaw.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.APPNAME}`
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use((req, res, next) => {
    console.log('utilisation du server')
    res.status(200).json({ message: 'connection réussie' })
})

app.use('/cartes', routerCartes)
