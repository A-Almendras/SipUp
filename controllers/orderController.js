const { Order } = require('../models')

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

// method to update an order
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(order)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// method to delete an order
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Order.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Order has been deleted')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder
}
