const { Schema, Types, model } = require('mongoose')

const schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: false, unique: false },
    password: { type: String, required: true },
})

module.exports = model('User', schema)