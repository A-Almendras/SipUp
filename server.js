// Dependencies
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

//  Initialize the Express App
const app = express()

// Configure App Settings

// Mount Middleware

// Mount Routes
app.get('/', (req, res) => {
  res.send('Welcome to SipUp')
})
// Tell Express to Listen
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`)
})
