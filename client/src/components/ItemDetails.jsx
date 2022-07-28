const ItemDetails = (props) => {
  let items = []
  for (let i = 1; i < props.orders.length; i++) {
    items.push(props.orders[i])
  }
  console.log(items)

  return (
    <div>
      <h1>Item Details</h1>
      {items.map((item) => (
        <div className="item-card" key={item.juiceId}>
          {/* <img id="pfp" src={review.pfp} alt="pfp" /> */}
          <h2>{item.juiceName}</h2>
          <p>Quantity:{item.quantity}</p>
          <p>Size:{item.size}</p>
          <p>Comments:{item.comments}</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ItemDetails
