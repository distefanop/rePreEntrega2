import '../styles/Item.css'
import React from 'react'
import {Link} from 'react-router-dom'

const Item =({producto})=> {
        return(
            <div className='card' style={{width:'18rem', marginTop:15}}>
                <img className='card-img-top card-img' src={producto.img} alt={producto.name}/>
                <div className='card-body'>
                    <h5>{producto.name}</h5>
                    <p>${producto.price},00</p>
                    <Link className='btn btn-secondary' to={`/item/${producto.id} `}>Ver más</Link>
                </div>
            </div>
        )
}

export default Item