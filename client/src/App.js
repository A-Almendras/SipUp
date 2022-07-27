import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import JuiceDetails from './pages/JuiceDetails'
import OrderDetails from './pages/OrderDetails'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="juice/details/:juiceId" element={<JuiceDetails />} />
        <Route path="order/details/:orderId" element={<OrderDetails />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
