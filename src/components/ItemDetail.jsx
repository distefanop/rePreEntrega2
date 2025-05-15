import '../styles/ItemDetail.css'
import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({productDetail}) => {
  const [purchase, setPurchase] = useState(false)

  const {addToCart, itemQuantity} = useContext(CartContext)

  const onAdd = (cantidad) => {
    addToCart(productDetail,cantidad)
    setPurchase(true)
    Swal.fire({
      title: `Se agregó ${productDetail.name} al carrito`,
      showConfirmButton: false,
      timer: 1200,
      width: 1000,
      color: "#008000",
      backdrop: `
       rgba(148, 184, 89, 0.5)
        left top
        no-repeat
      `
    });
  }

  const stockActualizado = productDetail.stock - itemQuantity(productDetail.id)

  return (
    <div className='detail-contenedor'>
      <h2>{productDetail.name}</h2>
      <div className='detail'>
        <img src={productDetail.img} alt={productDetail.name} className='detail-img'/>
        <p>{productDetail.description}</p>
        <p>${productDetail.price},00</p>
      </div>    
        {purchase 
        ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> 
        : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail