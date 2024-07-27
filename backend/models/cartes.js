const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const cartesSchema = mongoose.Schema({
    userId: { type: String, required: true },
    id: { type: Number, required: false },
    nom: { type: String, require: true, unique: true },
    difficulte: { type: Number, required: false },
    images: [{ type: String, required: true }],
    nbImages: { type: Number, required: true },
})

cartesSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Cartes', cartesSchema)
