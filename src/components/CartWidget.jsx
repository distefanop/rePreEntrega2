import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return (
        <div>
            <IoCartOutline fontSize={'25px'} color="green"/>
            <Badge bg="warning" text="dark">
                {cartQuantity()}
            </Badge>
        </div>
    )
}
export default CartWidget