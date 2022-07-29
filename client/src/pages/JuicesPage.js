import { useState, useEffect } from 'react'
import axios from 'axios'
import JuiceCard from '../components/JuiceCard'

const JuicesPage = ({ firstName }) => {
  const [juices, setJuices] = useState([])

  useEffect(() => {
    const getJuices = async () => {
      const response = await axios.get('/api/juices')
      // console.log(response)
      setJuices(response.data)
    }
    getJuices()
  }, [])

  return (
    <div>
      {/* Welcome does not work correctly */}
      <h1>Welcome{firstName}</h1>
      <JuiceCard juices={juices} />
    </div>
  )
}

export default JuicesPage
