import '../styles/Navbar.css'
import CartWidget from './CartWidget'

const Navbar  = () => {
    return (
        <nav className='nav-contenedor'>
            <img src='../logo.png' alt='logo' className='logo'/>
            <div className='a-container'>
            <a>Suculentas</a>
            <a>Cactus</a>
            <a>Insumos</a>
            </div>
            <CartWidget/>
        </nav>
    )
} 

export default Navbar 