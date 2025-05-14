import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'

function App() {


  return (
    <BrowserRouter>    
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a SuculentApp'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>  
    </CartProvider>  
    </BrowserRouter>
  )
}

export default App
