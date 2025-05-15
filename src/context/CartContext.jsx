import { createContext, useState } from "react";

export const CartContext = createContext({})

    export const CartProvider = (props) => {
        const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)){
            //hacer la logica de sumar cantidades
            const updatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    //sumar cantidades
                    return {...prod, quantity: prod.quantity + cantidad}
                }else{
                    return prod
                }
            })
            //actualizar el estado con el nuevo array
            setCart(updatedCart)
        }else{
    
            //sumar un nuevo item al carrito
            setCart([...cart, {...item, quantity:cantidad}])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((producto)=>producto.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((producto)=>producto.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod)=> acc+= prod.quantity,0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity, 0)
    }

    const itemQuantity = (id) => {
        const itemInCart = cart.find((prod)=> prod.id === id)
        if(itemInCart){
            return itemInCart.quantity
        }else{
            return 0
        }
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartTotal, cartQuantity, itemQuantity}}>
            {props.children}
        </CartContext.Provider>
    )
}