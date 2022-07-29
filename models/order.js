// Setting up our order schema for our model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema(
  {
    name: { type: Schema.Types.String, ref: 'Juice' },
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
    comments: { type: String }
  },
  { timestamps: true }
)
module.exports = OrderSchema
