import '../styles/CartItem.css'
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ compra }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2rem' }}>
      <img className='cart-img' src={compra.img} alt={compra.name} style={{ width: '10rem' }} />
      <span className='cart-detail'>{compra.name}</span>
      <span className='cart-detail'>{compra.quantity}</span>
      <span className='cart-detail'>${compra.price},00</span>
      <span className='cart-detail'>Total: $ {compra.quantity * compra.price},00</span>
      <button className='btn cart-detail-btn' onClick={() => removeItem(compra.id)}>X</button>
    </div>
  );
};

export default CartItem;