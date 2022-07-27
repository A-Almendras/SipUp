import './styles/App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import JuiceDetails from './pages/JuiceDetails'
import OrderDetails from './pages/OrderDetails'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <h1>Hello</h1>
      <LandingPage />
      <Home />
      <JuiceDetails />
      <OrderDetails />
      <Footer />
    </div>
  )
}

export default App
