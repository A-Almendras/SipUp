const mongoose = require('mongoose')
const Schema = mongoose.Schema

const juiceSchema = new Schema(
  {
    size: { type: String, required: true },
    sugarLevel: { type: String, required: true },
    iceLevel: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: String, required: true },
    address: { type: String, required: true },
    comments: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = juiceSchema
