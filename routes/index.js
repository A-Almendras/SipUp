// MOUNT ROUTES
const { Router } = require('express')
const router = Router()
const { juiceController, orderController } = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/juices', juiceController.getAllJuices)

router.get('/juices/:id', juiceController.getJuiceById)

router.post('/order', orderController.createOrder)

router.get('/orders', orderController.getAllOrders)

router.get('/orders/:id', orderController.getOrderById)

module.exports = router
