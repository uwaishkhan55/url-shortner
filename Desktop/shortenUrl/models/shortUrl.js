
const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  _id: {
    type: String,
    required: true,
  },
  hits: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)