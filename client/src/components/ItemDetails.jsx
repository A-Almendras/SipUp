import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ItemDetails = (props) => {
  let items = []

  for (let i = 0; i < props.orders.length; i++) {
    items.push(props.orders[i])
  }

  const navigate = useNavigate()

  const handleUpdate = async (id, index) => {
    await axios.get(`/api/orders/${id}`)
    navigate(`/orders/${id}`)
  }

  const handleDelete = async (id) => {
    await axios.delete(`/api/orders/${id}`)
    props.getOrders()
  }

  return (
    <div>
      <div className="item">
        {items.map((item, index) => (
          <div className="item-card" key={item.juiceId}>
            <h2>{item.name}</h2>
            <p>Quantity:{item.quantity}</p>
            <p>Size:{item.size}</p>
            <p>Comments:{item.comments}</p>
            <button onClick={() => handleUpdate(item._id, index)}>
              Update
            </button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemDetails
