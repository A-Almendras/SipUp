import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="home">
        <h1>SipUp</h1>
      </Link>
      <div>
        <Link to="/">Sign In</Link>
        <Link to="home">Home</Link>
        <Link to="order/details/:orderId">Orders</Link>
      </div>
    </nav>
  )
}

export default Nav
