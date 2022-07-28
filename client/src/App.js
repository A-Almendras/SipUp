import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import JuicesPage from './pages/JuicesPage'
import JuiceDetails from './pages/JuiceDetails'
import OrderDetails from './pages/OrderDetails'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="juices" element={<JuicesPage />} />
        <Route path="juices/:juiceId" element={<JuiceDetails />} />
        <Route path="orders/:id" element={<OrderDetails />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
