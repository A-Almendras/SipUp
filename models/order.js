// Setting up our order schema for our model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema(
  {
    // name: { type: String, required: true },
    // phoneNumber: { type: String },
    // paymentMethod: { type: String, required: true },
    // pickupMethod: { type: String, required: true },
    // address: { type: String },
    // amount: { type: Number, required: true },
    name: { type: Schema.Types.String, ref: 'Juice' },
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
    comments: { type: String }
  },
  { timestamps: true }
)
module.exports = OrderSchema
