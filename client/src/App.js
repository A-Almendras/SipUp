import { useNavigate, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import JuicesPage from './pages/JuicesPage'
import JuiceDetails from './pages/JuiceDetails'
import OrderDetails from './pages/OrderDetails'
import EditForm from './components/EditForm'
// import ItemDetails from './components/ItemDetails'

const App = () => {
  // const [orderUpdated, setOrderUpdated] = useState('')

  const submitChanges = () => {
    // useNavigate(`orders/${orders_id}/${index}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="juices" element={<JuicesPage />} />
        <Route path="juices/:juiceId" element={<JuiceDetails />} />
        <Route path="orders" element={<OrderDetails />} />
        {/* <Route path="orders/:orderId" element={<ItemDetails />} /> */}
        <Route path="orders/:id" element={<EditForm />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
