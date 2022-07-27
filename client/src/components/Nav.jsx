import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="home">
        <h1>SipUp</h1>
      </Link>
      <div>
        <Link to="/">Sign In</Link>
        <Link to="juices">Juices</Link>
        <Link to="orders/:id">Orders</Link>
      </div>
    </nav>
  )
}

export default Nav
