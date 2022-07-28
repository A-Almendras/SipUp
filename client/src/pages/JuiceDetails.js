import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const JuiceDetails = () => {
  const [juiceDetails, setJuiceDetails] = useState({})
  const [price, setPrice] = useState(0)
  // Only grabs the unique id from the url depending on the juice card that was picked
  let { juiceId } = useParams()
  // console.log(juiceId)

  useEffect(() => {
    const getJuiceDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/juices/${juiceId}`
      )
      // console.log(response)
      setJuiceDetails(response.data)
    }
    getJuiceDetails()
  }, [juiceId])
  // console.log(juiceDetails)
  // console.log(juiceDetails.prices)

  const handleSizeClick = (e) => {
    // e.preventDefault()
    if (e.target.value === 'Small') {
      setPrice(juiceDetails.prices[0])
      juiceDetails.size = 'Small'
    } else if (e.target.value === 'Medium') {
      setPrice(juiceDetails.prices[1])
      juiceDetails.size = 'Medium'
    } else if (e.target.value === 'Large') {
      setPrice(juiceDetails.prices[2])
      juiceDetails.size = 'Large'
    }
    console.log(e.target.value)
  }

  const handleSugarChange = (e) => {
    // e.preventDefault()
    if (e.target.value === 'Small') {
      setPrice(juiceDetails.prices[0])
      juiceDetails.size = 'Small'
    } else if (e.target.value === 'Medium') {
      setPrice(juiceDetails.prices[1])
      juiceDetails.size = 'Medium'
    } else if (e.target.value === 'Large') {
      setPrice(juiceDetails.prices[2])
      juiceDetails.size = 'Large'
    }
    console.log(e.target.value)
  }

  return (
    <div>
      <h1>Juice Details Page Component</h1>
      <h1>{juiceDetails.name}</h1>
      <img src={juiceDetails.image} alt={juiceDetails.name} />
      <p>Ingredients: {juiceDetails.description}</p>
      <section>
        <h2>${price}</h2>
        <input
          className="btn"
          type="submit"
          value="Small"
          onClick={handleSizeClick}
        />
        <input
          className="btn"
          type="submit"
          value="Medium"
          onClick={handleSizeClick}
        />
        <input
          className="btn"
          type="submit"
          value="Large"
          onClick={handleSizeClick}
        />
      </section>
      <section>
        <p>Choose Sugar Level:</p>
        <input
          className="btn"
          type="radio"
          value="0%"
          onChange={handleSugarChange}
        />
        <input
          className="btn"
          type="radio"
          value="50%"
          onChange={handleSugarChange}
        />
        <input
          className="btn"
          type="radio"
          value="100%"
          onChange={handleSugarChange}
        />
      </section>
    </div>
  )
}

export default JuiceDetails
