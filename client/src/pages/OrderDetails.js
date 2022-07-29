import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemDetails from '../components/ItemDetails'
import EditForm from '../components/EditForm'
// import ItemToOrder from '../components/ItemToOrder'

const OrderDetails = (props) => {
  const [orders, setOrders] = useState([])

  // Removed from useeffect for delete to work properly in ItemDetails
  const getOrders = async () => {
    const response = await axios.get('http://localhost:3001/api/orders')
    console.log(response)
    setOrders(response.data)
    // console.log(response.data)
  }

  useEffect(() => {
    getOrders()
  }, [])

  // console.log(orders)

  return (
    <div>
      <h1>Order Details</h1>
      <ItemDetails orders={orders} getOrders={getOrders} />
      <EditForm orders={orders} getOrders={getOrders} />
    </div>
  )
}

export default OrderDetails
