import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LandingPage = () => {
  const navigate = useNavigate()

  let initialState = {
    firstname: '',
    lastName: '',
    payMethod: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target.value)

    setFormState({ ...formState, [e.target.id]: e.target.value })
    console.log(e.target)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    navigate('/juices')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome to SipUp!</h2>
      <p>Please Enter your info below:</p>
      <label htmlFor="firstname">FirstName:</label>
      <textarea
        id="firstName"
        onChange={handleChange}
        value={formState.firstname}
        cols="15"
        rows="1"
      ></textarea>
      <label htmlFor="lastName">Last Name:</label>
      <textarea
        id="lastName"
        onChange={handleChange}
        value={formState.lastName}
        cols="15"
        rows="1"
      ></textarea>

      <label htmlFor="payMethod">PaymentMethod:</label>
      <select id="payMethod">
        <option value=""></option>
        <option value="cash">Cash</option>
        <option value="cc">Credit Card</option>
      </select>
      <button type="submit" firstname={formState.firstname}>
        Begin Ordering
      </button>
    </form>
  )
}

export default LandingPage
