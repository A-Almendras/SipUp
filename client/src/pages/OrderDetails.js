import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemDetails from '../components/ItemDetails'
import EditForm from '../components/EditForm'

const OrderDetails = (props) => {
  const [orders, setOrders] = useState([])

  // Removed from useeffect for delete to work properly in ItemDetails
  const getOrders = async () => {
    const response = await axios.get('/api/orders')
    console.log(response)
    setOrders(response.data)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div>
      <h1>Order: Details of Each Item</h1>
      <ItemDetails orders={orders} getOrders={getOrders} />
      <EditForm orders={orders} getOrders={getOrders} />
    </div>
  )
}

export default OrderDetails
