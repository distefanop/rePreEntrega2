import '../styles/ItemCount.css'
import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
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

const comprar = ()=>{
    onAdd(count)
}

  return (
    <div className='count-contenedor'>
        <div className='count-btn'>
            <button className='btn btn-warning' onClick={substract}>-</button>
            <span className='contador-span'>{count}</span>
            <button className='btn btn-warning' onClick={add}>+</button>
        </div>
        <button className='btn btn-dark' onClick={()=>onAdd(count)}>Agregar al carrito </button>
    </div>
  )
}

export default ItemCount