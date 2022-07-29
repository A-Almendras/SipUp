import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemToOrder from '../components/ItemToOrder'

const JuiceDetails = () => {
  const [juiceDetails, setJuiceDetails] = useState({})
  // Only grabs the unique id from the url depending on the juice card that was picked
  let { juiceId } = useParams()

  useEffect(() => {
    const getJuiceDetails = async () => {
      const response = await axios.get(`/api/juices/${juiceId}`)
      setJuiceDetails(response.data)
    }
    getJuiceDetails()
  }, [juiceId])

  return (
    <div className="juice-page">
      <h1>Juice Details</h1>
      <h2>{juiceDetails.name}</h2>
      <div className="img-details">
        <img src={juiceDetails.image} alt={juiceDetails.name} />
      </div>

      <p>Ingredients: {juiceDetails.description}</p>
      <section>
        <ItemToOrder juiceDetails={juiceDetails} juiceId={juiceId} />
      </section>
    </div>
  )
}

export default JuiceDetails
