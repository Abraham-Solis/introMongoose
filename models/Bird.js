const { Schema, model } = require('mongoose')

const BirdSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  breed: {
    type: String,
    required: true
  }
})

module.exports = model('bird', BirdSchema)