// Initializing our juice and order models
const mongoose = require('mongoose')
const juiceSchema = require('./juice')
const orderSchema = require('./order')

const Juice = mongoose.model('Juice', juiceSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = {
  Juice,
  Order
}
