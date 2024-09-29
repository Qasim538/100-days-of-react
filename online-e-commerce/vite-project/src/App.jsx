
import './App.css'
import Navbar from './Components/Navbar'
import ProductPage from './Components/ProductPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
import SearchItem from './Components/SearchItem'
import Cart from './Components/Cart'

function App() {

  return (
    <>
    <Navbar />
    <Router>
    <Routes>
    <Route path='/' element={<ProductPage />}/>
    <Route path='/product/:id' element={<ProductDetails />}/>
    <Route path='/search/:term' element={<SearchItem />}/>
    <Route path='/cart' element={<Cart />}/>
    
    </Routes>
    </Router>
    </>
  )
}

export default App
