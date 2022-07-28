const { Juice } = require('../models')

// method to grab all the juices from the database
const getAllJuices = async (req, res) => {
  try {
    const juices = await Juice.find({})
    // console.log(juices)
    res.status(200).json(juices)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

// method to get a specific juice
const getJuiceById = async (req, res) => {
  try {
    const { id } = req.params
    const juice = await Juice.findById(id)
    if (juice) {
      return res.status(200).json(juice)
    }
    return res.status(400).send('Juice with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllJuices,
  getJuiceById
}

// const { JuiceSchema } = require('../models/juice')
// const getAllJuices = async (req, res) => {
//   console.log('hello')
//   try {
//     const juices = await JuiceSchema.find()
//     console.log(juices)
//     res.status(200).json(juices)
//   } catch (error) {
//     console.log(error)
//     res.status(500).send(error.message)
//   }
// }
