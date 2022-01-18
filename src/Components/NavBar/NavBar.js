//react
import { Link } from 'react-router-dom';
//styles
import '../NavBar/navBar.css'
//components
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
    <div className='container-header'>
    <div className="header">
       
        <div>
            <Link to='/'> <h3 className="titleHeader">Tu Notebook</h3></Link>
      </div>
      
      <div>
        <ul className="listaHeader">
                <li className="listado"><span>Marcas</span>
               <ul className='menu-vertical'>
                <Link to='/marcas/dell'><li>Dell</li></Link>
                <Link to='/marcas/lenovo'><li>Lenovo</li></Link>
                <Link to='/marcas/hp'><li>HP</li></Link>
                  </ul>
               </li> 
               <Link to='/nosotros'> <li className="listado"><span>Nosotros</span></li> </Link>
               <Link to='/contacto'><li className="listado"><span>Contacto</span></li> </Link>
      </ul>
      </div>

      <div>
               <CartWidget />
      </div>

      </div>
      <div className='header-bottom-mobile'>
      <ul className="listaHeaderMobile">
                <li className="listadoMobile"><span>Marcas</span>
               <ul className='menu-vertical-Mobile'>
                <Link to='/marcas/dell'><li>Dell</li></Link>
                <Link to='/marcas/lenovo'><li>Lenovo</li></Link>
                  </ul>
               </li> 
               <Link to='/nosotros'> <li className="listadoMobile"><span>Nosotros</span></li> </Link>
               <Link to='/contacto'><li className="listadoMobile"><span>Contacto</span></li> </Link>
      </ul>
      </div>
      </div>
    </>
  );
}

export default NavBar;
