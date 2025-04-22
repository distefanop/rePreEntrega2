import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loader, setLoader] = useState(false)
    const {itemId}=useParams()

    useEffect(()=>{
        setLoader(true)
        getOneProduct(itemId)
        .then ((response)=> setProductDetail(response))
        .catch((error)=> console.log(error))
        .finally(()=>setLoader(false)) 
    },[itemId])

  return (
    <div>
      {
        loader ? <h1 className='loader'>Cargando...</h1>
        :<div>
          <ItemDetail productDetail={productDetail}/>
        </div>
      }
      
    </div>
  )
}

export default ItemDetailContainer