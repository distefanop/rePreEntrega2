import '../styles/ItemCount.css'
import React, {useState} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

const add = () => {
    if(count < stock){
    setCount(count + 1)
    }
}

const substract = () => {
    if(count > 0){
    setCount(count - 1)
    }
}

  return (
    <div className='count-contenedor'>
        <div className='count-btn'>
            <button className='btn btn-warning' onClick={substract}>-</button>
            <span className='contador-span'>{count}</span>
            <button className='btn btn-warning' onClick={add}>+</button>
        </div>
        <button className='btn btn-secondary'>Agregar al carrito </button>
    </div>
  )
}

export default ItemCount