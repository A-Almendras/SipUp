// Dependencies
const db = require('./db')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
// const { juiceController } = require('./controllers')
// const { Juice } = require('./models')

//  Initialize the Express App
const app = express()

// Configure App Settings

// Mount Middleware
app.use(express.json()) // creates req.body from incoming (serving & receiving) JSON request bodies
app.use(cors()) // any origin that is requesting data from this API can have access
app.use(logger('dev'))

// Mount Routes
app.get('/', (req, res) => {
  res.send('Welcome to SipUp')
})

app.use('/api', routes)
// app.get('/juices', juiceController.getJuices)
// app.get('/juices', async (req, res) => {
//   const juices = await Juice.find({})
//   res.json(juices)
// })

// Tell Express to Listen
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`)
})
