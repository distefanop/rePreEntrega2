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
    <div>
        {
            stock === 0 ? <p>Producto sin stock</p>
            : <div className='count-contenedor'>
            <div className='count-btn-container'>
                <button className='btn count-btn' onClick={substract}>-</button>
                <span className='contador-span'>{count}</span>
                <button className='btn count-btn' onClick={add}>+</button>
            </div>
            <button className='btn count-btn-cart' onClick={()=>onAdd(count)}>Agregar al carrito </button>
            </div>
        }
    </div>
  )
}

export default ItemCount