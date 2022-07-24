const { Schema, model } = require('mongoose')

const schema = new Schema({
  image: { type: String, default: null },
  title: { type: String, required: true },
  description: { type: String, default: null },
  createdBy: { type: String, required: true },
  createdDate: { type: Number, default: Date.now() },
  views: { type: Number, default: 0 },
})

module.exports = model('Post', schema)
