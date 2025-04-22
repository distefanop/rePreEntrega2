import '../styles/ItemDetail.css'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
  return (
    <div className='detail-contenedor'>
        <h2>{productDetail.name}</h2>
        <img src={productDetail.img} alt={productDetail.name} className='detail-img'/>
        <p>{productDetail.description}</p>
        <p>${productDetail.price},00</p>
        <ItemCount stock={productDetail.stock}/>
    </div>
  )
}

export default ItemDetail