import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = ({greeting}) => {

  const [data, setData]= useState([])
  const [loader, setLoader] = useState(false)
  const {categoryId}= useParams()
 
useEffect(()=>{
  setLoader(true)
  const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId))  :collection(db, "productos")
  getDocs(productsCollection)
  .then((response)=>{
    const list = response.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
      }
    }) 
    setData(list)
  })
  .catch((error)=>console.log(error))
  .finally(()=>setLoader(false))
},[categoryId])

    return(
        <div>
          {
            loader ? <LoaderComponent/>
            :<div>
                <h1 className='saludo'>{greeting} {categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
                <ItemList data={data}/>
            </div>
          }
        </div>
    )
}

export default ItemListContainer