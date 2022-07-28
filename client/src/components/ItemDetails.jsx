import axios from 'axios'

const ItemDetails = (props) => {
  let items = []

  for (let i = 0; i < props.orders.length; i++) {
    items.push(props.orders[i])
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/orders/${id}`)
    props.getOrders()
  }

  return (
    <div>
      <h1>Item Details</h1>
      {items.map((item) => (
        <div className="item-card" key={item.juiceId}>
          {/* <img id="pfp" src={review.pfp} alt="pfp" /> */}
          <h2>{item.name}</h2>
          <p>Quantity:{item.quantity}</p>
          <p>Size:{item.size}</p>
          <p>Comments:{item.comments}</p>
          <button>Update</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ItemDetails
