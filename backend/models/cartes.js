const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const cartesSchema = mongoose.Schema({
    userId: { type: String, required: true },
    id: { type: Number, required: false },
    nom: { type: String, require: true, unique: true },
    difficulte: { type: Number, required: false },
    images: [
        {
            imageId: { type: String, required: false },
            link: { type: String, required: true },
        },
    ],
    nbImages: { type: String, required: true },
})

bookSchema.plugin(uniqueValidator)

module.exports = mongoose.Model('Cartes', cartesSchema)
