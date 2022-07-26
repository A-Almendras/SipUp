// Mongoose Database Connection
const mongoose = require('mongoose')
// const { mainModule } = require('process')

// once MongoDB deployed and url in .env, put this in .connect() process.env.MONGODB_URI & erase line 6
let MONGODB_URI = 'mongodb://127.0.0.1:27017/juicesDatabase'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((error) => {
    console.error('Connection error', error.message)
  })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db