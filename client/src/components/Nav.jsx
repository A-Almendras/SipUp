import { Link } from 'react-router-dom'
// import ItemToOrder from './ItemToOrder'

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="home">
        <h2>SipUp</h2>
      </Link>
      <div>
        <Link to="/">Sign In</Link>
        <Link to="juices">Juices</Link>
        <Link to="orders">Orders</Link>
      </div>
    </nav>
  )
}

export default Nav
