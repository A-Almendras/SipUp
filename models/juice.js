// Setting up our juice schema for our model
const { Schema } = require('mongoose')

const JuiceSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    size: { type: [String], required: true },
    sugarLevel: { type: [String], required: true },
    prices: { type: [Number], required: true },
    comments: { type: String }
  },
  { timestamps: true }
)
module.exports = JuiceSchema
