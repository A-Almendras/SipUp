const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    pickupMethod: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
    juice: { type: Schema.Types.ObjectId, ref: 'Juice' }
  },
  { timestamps: true }
)
module.exports = orderSchema
