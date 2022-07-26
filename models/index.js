// Initializing our juice and order models
const mongoose = require('mongoose')
const JuiceSchema = require('./juice')
const OrderSchema = require('./order')

const Juice = mongoose.model('Juice', JuiceSchema)
const Order = mongoose.model('Order', OrderSchema)

module.exports = {
  Juice,
  Order
}
