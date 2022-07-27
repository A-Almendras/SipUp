const JuiceCard = (props) => {
  return (
    <div className="juice-list">
      {/* <h1>Juice Card Component</h1> */}
      {props.juices.map((juice) => (
        <div key={juice.name}>
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
