import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ItemDetails = (props) => {
  let items = []

  for (let i = 0; i < props.orders.length; i++) {
    items.push(props.orders[i])
  }

  const navigate = useNavigate()

  const handleUpdate = async (id, index) => {
    // await axios.put(`http://localhost:3001/api/orders/${id}`)
    // props.getOrders()
    // console.log(id)
    await axios.get(`http://localhost:3001/api/orders/${id}`)
    navigate(`/orders/${id}`)
    // props.getOrders()
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/orders/${id}`)
    props.getOrders()
  }

  return (
    <div>
      <h1>Item Details</h1>
      {items.map((item, index) => (
        <div className="item-card" key={item.juiceId}>
          {/* <img id="pfp" src={review.pfp} alt="pfp" /> */}
          <h2>{item.name}</h2>
          <p>Quantity:{item.quantity}</p>
          <p>Size:{item.size}</p>
          <p>Comments:{item.comments}</p>
          <button onClick={() => handleUpdate(item._id, index)}>Update</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ItemDetails
