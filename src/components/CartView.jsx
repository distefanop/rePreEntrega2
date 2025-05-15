import '../styles/CartView.css'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem';

const CartView = () => {
    const {cart, removeItem, clear, cartTotal}= useContext(CartContext)
  return (
    <div>
        <h1 className='cart'>Tu Carrito</h1>
        <div>
            {cart.map((compra) => (
            <CartItem key={compra.id} compra={compra}/>
          ))
        }
        </div>
        <div className='cart-total-container'>
            <span className='cart-total'>Total a pagar: ${cartTotal()}</span>
            <div className='cart-btn-container'>
                <button className='btn cart-btn' onClick={clear}>Vaciar el carrito</button>
                <Link className='btn cart-btn' to='/checkout'>Finalizar compra</Link> 
            </div>
        </div>
    </div>
  )
}

export default CartView