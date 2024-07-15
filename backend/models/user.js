const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    userId: { type: String, required: true }, //donné par Mongodb
    password: { type: String, required: true },
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
