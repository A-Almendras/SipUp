import axios from 'axios'
import { useEffect, useState } from 'react'
// import ItemToOrder from '../components/ItemToOrder'

const OrderDetails = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get('http://localhost:3001/api/orders')
      console.log(response)
      setOrders(response.data)
    }
    getOrders()
  }, [])

  return (
    <div>
      <h1>{orders.quantity}</h1>
    </div>
  )
}

export default OrderDetails
