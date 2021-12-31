import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <>
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
    </>
  );
}

export default NavBar;
