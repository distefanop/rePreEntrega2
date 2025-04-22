import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
import { getProducts } from '../mock/asyncService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const [data, setData]= useState([])
  const [loader, setLoader] = useState(false)
  const {categoryId}= useParams()
 
    
    useEffect(()=>{
      setLoader(true)
      getProducts()
      .then((response)=> {
        if(categoryId){
          setData(response.filter((producto)=>producto.category === categoryId))
        }else{
          setData(response)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=>setLoader(false)) 
    },[categoryId])

    return(
        <div>
          {
            loader ? <h1 className='loader'>Cargando...</h1>
            :<div>
                <h1 className='saludo'>{greeting} {categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
                <ItemList data={data}/>
            </div>
          }
        </div>
    )
}

export default ItemListContainer