const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}

const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT,
} = process.env

const uri = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(uri, options)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectToDB