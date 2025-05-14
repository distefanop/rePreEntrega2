import '../styles/EmptyCart.css'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='empty-cart-container'>
        <h1>Tu carrito está vacio</h1>
        <h3>Te invitamos a ir a la página principal para ver más productos</h3>
        <Link to ='/' className='btn btn-dark'>Volver al inicio</Link>
    </div>
  )
}

export default EmptyCart