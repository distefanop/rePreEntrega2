import '../styles/CartView.css'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, removeItem, clear, cartTotal}= useContext(CartContext)
    const clearCart= () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "¿Estas seguro?",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        reverseButtons: true,
        backdrop: `
                  rgba(251, 185, 32, 0.5)
                    left top
                    no-repeat
                  `,
        customClass: {
          title: 'title',
          confirmButton: 'confirm-btn',
          cancelButton: 'confirm-btn'
        }
    }).then((result)=>{
        if(result.isConfirmed){
            clear()
        }else if(result.isDenied){

        }
    })
}

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
                <button className='btn cart-btn' onClick={clearCart}>Vaciar el carrito</button>
                <Link className='btn cart-btn' to='/checkout'>Finalizar compra</Link> 
            </div>
        </div>
    </div>
  )
}

export default CartView