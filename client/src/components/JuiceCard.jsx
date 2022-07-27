import { useNavigate } from 'react-router-dom'

const JuiceCard = (props) => {
  let navigate = useNavigate()

  const showJuice = (juice) => {
    navigate(`${juice._id}`)
  }

  return (
    <div className="juice-list">
      {/* <h1>Juice Card Component</h1> */}
      {props.juices.map((juice) => (
        <div key={juice.name} onClick={() => showJuice(juice)}>
          <div>
            <img src={juice.image} alt={juice.name} />
            <h2>{juice.name}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JuiceCard
