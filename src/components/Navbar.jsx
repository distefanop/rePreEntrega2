import '../styles/Navbar.css'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'

const Navbar  = () => {
    return (
        <nav className='nav-contenedor'>
            <NavLink to='/'>
                <img src='../logo.png' alt='logo' className='logo'/>
            </NavLink>
            <div className='a-container'>
            <NavLink to='/category/suculentas' className='nav-category'>Suculentas</NavLink>
            <NavLink to='/category/cactus' className='nav-category'>Cactus</NavLink>
            <NavLink to='/category/insumos' className='nav-category'>Insumos</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
} 

export default Navbar 