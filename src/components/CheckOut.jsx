import '../styles/CheckOut.css'
import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

const CheckOut = () => {
    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, clear, cartTotal}=useContext(CartContext)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]:e.target.value
            }
        )
    }
    
    const finalizarCompra = (e) => {
        e.preventDefault()

        if(!buyer.name || !buyer.lastname || !buyer.email){
            Swal.fire({
                  title: 'Todos los campos son requeridos',
                  showConfirmButton: false,
                  timer: 1200,
                  width: 1000,
                  color: "#fd8f0a",
                  backdrop: `
                    rgba(251, 185, 32, 0.88)
                    left top
                    no-repeat
                  `
                });
        }else if(buyer.email !== validateEmail){
            Swal.fire({
                title: 'Los correos no coinciden',
                showConfirmButton: false,
                timer: 1200,
                width: 1000,
                color: "#fd8f0a",
                backdrop: `
                  rgba(251, 185, 32, 0.88)
                  left top
                  no-repeat
                `
              });
        }else{

            let order={
                usuario: buyer,
                compras: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db,'orders')

            addDoc(ventas, order)
            .then((response)=>{
                cart.forEach((item)=>{
                    const docRef = doc(db, "productos", item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                    })
                    .catch((error)=> console.log(error))
                })                
                setOrderId(response.id)
                clear()
            })
            .catch((error)=>console.log(error))
        }
    }

  return (
    <div>
        {orderId 
        ?<div className='compra-realizada'>
            <h2>Gracias por tu compra</h2>
            <h3>Tu número de operación es: {orderId}</h3>
        </div>
        :<div className='form-container'>
        <h1>Completá tus datos</h1>
            <Form className='form' onSubmit={finalizarCompra}>
                <Form.Group className="mb-3 input">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresá tu nombre" name='name' onChange={buyerData}/>
                </Form.Group>
                <Form.Group className="mb-3 input">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingresá tu apellido" name='lastname' onChange={buyerData}/>
                </Form.Group>
                <Form.Group className="mb-3 input">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresá tu correo electrónico" name='email' onChange={buyerData}/>
                </Form.Group>
                <Form.Group className="mb-3 input">
                    <Form.Control type="email" placeholder="Volvé a ingresar tu correo electrónico" name='second-email'onChange={(e)=>setValidateEmail(e.target.value)}/>
                </Form.Group>
                <Button className='form-btn' variant="secondary" type="submit">
                    Enviar
                </Button>
            </Form>
        {/* <form onSubmit={finalizarCompra}>
            <input type='text' name='name' onChange={buyerData}/>
            <input type='text' name='lastname' onChange={buyerData}/>
            <input type='email' name='email' onChange={buyerData}/>
            <input type='email' name='second-email'onChange={(e)=>setValidateEmail(e.target.value)}/>
            <button type='submit'>Enviar</button>
        </form>  */}
        </div>}
    </div>
  )
}

export default CheckOut