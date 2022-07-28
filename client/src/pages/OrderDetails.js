import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemDetails from '../components/ItemDetails'
// import ItemToOrder from '../components/ItemToOrder'

const OrderDetails = (props) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get('http://localhost:3001/api/orders')
      // console.log(response)
      setOrders(response.data)
      // console.log(response.data)
    }
    getOrders()
  }, [])

  // console.log(orders)

  return (
    <div>
      <h1>Order Details</h1>
      <ItemDetails orders={orders} />
    </div>
  )
}

export default OrderDetails
