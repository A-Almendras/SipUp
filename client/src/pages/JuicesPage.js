import { useState, useEffect } from 'react'
import axios from 'axios'
import JuiceCard from '../components/JuiceCard'

const JuicesPage = ({ firstName }) => {
  const [juices, setJuices] = useState([])

  useEffect(() => {
    const getJuices = async () => {
      const response = await axios.get('http://localhost:3001/api/juices')
      // console.log(response)
      setJuices(response.data)
    }
    getJuices()
  }, [])

  return (
    <div>
      <h1>Welcome{firstName}</h1> <p></p>
      <JuiceCard juices={juices} />
    </div>
  )
}

export default JuicesPage
