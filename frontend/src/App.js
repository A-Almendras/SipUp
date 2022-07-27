import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import JuiceDetails from './pages/JuiceDetails'
import OrderDetails from './pages/OrderDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Home />
      <JuiceDetails />
      <OrderDetails />
      <Footer />
    </div>
  )
}

export default App
