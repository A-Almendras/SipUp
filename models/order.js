// Setting up our order schema for our model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    pickupMethod: { type: String, required: true },
    address: { type: String },
    totalAmount: { type: Number, required: true },
    juices: [
      {
        juice_Id: { type: Schema.Types.ObjectId, ref: 'Juice' },
        quantity: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
)
module.exports = orderSchema
