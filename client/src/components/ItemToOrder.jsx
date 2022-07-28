import { useState } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'

const ItemToOrder = ({ juiceDetails, juiceId }) => {
  const [price, setPrice] = useState(0)

  const initialState = {
    juiceId: juiceId,
    size: '',
    quantity: '',
    comments: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    if (e.target.value === 'small') {
      setPrice(juiceDetails.prices[0])
      formState.size = 'small' // still a bit unsure about this
    } else if (e.target.value === 'medium') {
      setPrice(juiceDetails.prices[1])
      formState.size = 'medium'
    } else if (e.target.value === 'large') {
      setPrice(juiceDetails.prices[2])
      formState.size = 'large'
    }
    console.log(e.target.value)

    setFormState({ ...formState, [e.target.id]: e.target.value })
    console.log(e.target)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(formState)
    let response = await axios.post(
      'http://localhost:3001/api/order',
      formState
    )
    console.log(response)
    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>${price}</h2>

      <label htmlFor="size">Size:</label>
      <select id="size" onChange={handleChange}>
        <option value=""></option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label htmlFor="level">Sugar Level:</label>
      <select id="level">
        <option value=""></option>
        <option value="0%">0%</option>
        <option value="50%">50%</option>
        <option value="100%">100%</option>
      </select>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        onChange={handleChange}
        defaultValue={1}
        value={formState.quantity}
      />
      <label htmlFor="comments">Comments:</label>
      <textarea
        id="comments"
        onChange={handleChange}
        value={formState.comments}
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit">Add to Order</button>
    </form>
  )
}

export default ItemToOrder
