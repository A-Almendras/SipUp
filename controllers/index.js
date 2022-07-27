// CONTROLLERS: SETUP LOGIC, what does our API do when CRUD requests

const { Order, Juice } = require('../models')
// const { JuiceSchema } = require('../models/juice')
// method to grab all the juices from the database
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

const getJuices = async (req, res) => {
  const juices = await Juice.find({})
  res.json(juices)
}

// method to get a specific juice
const getJuiceById = async (req, res) => {
  try {
    const { id } = req.params
    const juice = await Juice.findById(id)
    if (juice) {
      return res.status(200).json({ juice })
    }
    return res.status(400).send('Juice with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// method to create an order
const createOrder = async (req, res) => {
  try {
    const order = await new Order(req.body)
    await order.save()
    return res.status(201).json({ order })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// method to grab all the orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
    return res.status(200).json({ orders })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// method to get a specific order
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById(id)
    if (order) {
      return res.status(200).json({ order })
    }
    return res.status(400).send('Order with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  // getAllJuices,
  getJuices,
  getJuiceById,
  createOrder,
  getAllOrders,
  getOrderById
}
