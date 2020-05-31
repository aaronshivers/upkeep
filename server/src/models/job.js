const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  frequency: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  lastCompleted: {
    type: Date,
    default: Date.now(),
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true
  }
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job
