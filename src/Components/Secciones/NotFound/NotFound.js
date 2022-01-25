//react
import {Link} from 'react-router-dom'
//styles
import '../NotFound/notFound.css'

function NavBar() {
  return (
    <section className='container-error'>
    <Link to='/'>
    <img src='Error404.svg' alt='img-error' className='img-error' />
    <h1 className='titleNotFound'>Página no encontrada</h1>
    <p className='back-error'>Seguir navegando</p>
        </Link>
    </section>
  );
}

export default NavBar;
