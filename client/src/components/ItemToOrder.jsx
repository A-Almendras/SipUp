import { useState } from 'react'
import axios from 'axios'

const ItemToOrder = (props) => {
  const [price, setPrice] = useState(0)
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState('')
  const [comments, setComments] = useState('')

  const addItemToOrder = async (e) => {
    await axios.post('http://localhost:3001/api/order', {
      name: props.juiceDetails.name,
      size: size,
      quantity: quantity,
      comments: comments
    })
  }
  const changeSize = (event) => {
    let size = event.target.value
    setSize(size)
    if (event.target.value === 'small') {
      setPrice(8)
      console.log(price)
    } else if (event.target.value === 'medium') {
      setPrice(10)
    } else if (event.target.value === 'large') {
      setPrice(12)
    }
  }
  const changeQuantity = (event) => {
    let qty = parseInt(event.target.value)
    setQuantity(qty)
    // if (size === 'small') {
    //   if (qty > 1) {
    //     setPrice(price * qty)
    //   } else {
    //     price - 8
    //   }
    // }
  }
  const changeComments = (event) => {
    let comment = event.target.value
    setComments(comment)
  }

  const handleSubmit = (event) => {
    addItemToOrder(event)
    console.log(props.orders)
  }

  return (
    <div>
      <h2>Price for 1: ${price}</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-size">
            <label htmlFor="size">Size:</label>
            <select id="size" onChange={changeSize}>
              <option value=""></option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="form-level">
            <label htmlFor="level">Sugar Level:</label>
            <select id="level">
              <option value=""></option>
              <option value="0%">0%</option>
              <option value="50%">50%</option>
              <option value="100%">100%</option>
            </select>
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              className="form-qty"
              type="number"
              id="quantity"
              onChange={changeQuantity}
              defaultValue={1}
              value={quantity}
            />
          </div>
          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              onChange={changeComments}
              value={comments}
              placeholder={'Write any comments youd want to let us know'}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit">Add to Order</button>
        </form>
      </div>
    </div>
  )
}

export default ItemToOrder
