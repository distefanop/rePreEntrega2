import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <div>
            <IoCartOutline fontSize={'25px'}/>
            <Badge bg="warning" text="dark">
                2
            </Badge>
        </div>
    )
}
export default CartWidget