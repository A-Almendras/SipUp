// Setting up our juice schema for our model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const juiceSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    size: { type: String, required: true },
    sugarLevel: [
      {
        level: { type: String, required: true }
      }
    ],
    iceLevel: [
      {
        level: { type: String, required: true }
      }
    ],
    prices: { type: [Number], required: true },
    comments: { type: String }
  },
  { timestamps: true }
)
module.exports = juiceSchema
