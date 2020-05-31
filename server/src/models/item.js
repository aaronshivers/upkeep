const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  make: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  model: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  serial: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
