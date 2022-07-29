import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditForm = (props) => {
  const [price, setPrice] = useState(0)
  // const [name, setName] = useState(props.juiceDetails.name)
  // const [size, setSize] = useState('')
  // const [quantity, setQuantity] = useState('')
  // const [comments, setComments] = useState('')

  let navigate = useNavigate()

  let { id, index } = useParams()

  const initialState = {
    name: '',
    size: '',
    quantity: '',
    comments: ''
  }

  const [formState, setFormState] = useState(initialState)

  const getItem = async () => {
    let response = await axios.get(`http://localhost:3001/api/orders/${id}`)
    console.log(response.data)
    setFormState(response.data)
  }

  useEffect(() => {
    getItem()
  }, [])

  const handleChange = (e) => {
    // if (e.target.value === 'small') {
    //   setPrice(juiceDetails.prices[0])
    //   formState.size = 'small' // still a bit unsure about this
    // } else if (e.target.value === 'medium') {
    //   setPrice(juiceDetails.prices[1])
    //   formState.size = 'medium'
    // } else if (e.target.value === 'large') {
    //   setPrice(juiceDetails.prices[2])
    //   formState.size = 'large'
    // }
    e.preventDefault()
    console.log(e.target.value)

    setFormState({ ...formState, [e.target.id]: e.target.value })
    console.log(e.target)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/orders/${id}`, formState)
    // console.log(response)
    setFormState(initialState)
    navigate('/orders')
  }

  return (
    <div className="form-edit">
      <h1> Edit Item</h1>
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
        <button type="submit">Update</button>
      </form>
    </div>
  )
}
export default EditForm
