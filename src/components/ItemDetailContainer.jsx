import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [invalid, setInvalid] = useState(null)
    const [loader, setLoader] = useState(false)
    const {itemId}=useParams()

    useEffect(()=>{
      setLoader(true)
      const productCollection = collection(db,'productos')
      const docRef = doc(productCollection, itemId)

      getDoc(docRef)
      .then((response)=>{
        if(response.data()){
          setProductDetail({id: response.id,...response.data()})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=>console.log(error))
      .finally(()=>setLoader(false))
    },[])

  if(invalid){
    return <div>
      <h2>El producto no existe</h2>
      <Link className='btn btn-secondary' to='/'>Volver al inicio</Link>
      </div>
  }

  return (
    <div>
      {
        loader 
        ? <LoaderComponent/>
        :<div>
          <ItemDetail productDetail={productDetail}/>
        </div>
      }
      
    </div>
  )
}

export default ItemDetailContainer