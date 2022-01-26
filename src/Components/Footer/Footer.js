//react
/* import {Link} from 'react-router-dom'
 *///styles
import '../Footer/footer.css'
//scroll
import { Link } from 'react-scroll';

function Footer() {
    
    return (
      <div className="footer">

        <div className="columnaFooter">
      <h3 className="titleFooter">TuNotebook</h3>
      <a href='https://goo.gl/maps/XxbVDMfstqWBNf177' target="_blank" rel="noreferrer noopener"><p className="datosFooter">Buenos Aires</p></a>
      <p className="datosFooter">Argentina</p> 
      </div>

      <div className="columnaFooter">
      <h3 className="titleFooter">Contacto</h3>
      <a href='https://api.whatsapp.com/send?phone=+541159300042&text=Hola 😁 Estoy probando TuNotebook.com' target="_blank" rel="noreferrer noopener"><p className="datosFooter">Teléfono: 1559300042</p></a>
      <a href='mailto:octaviofitz@gmail.com' target="_blank" rel="noreferrer noopener"><p className="datosFooter">Email: octaviofitz@gmail.com</p></a>
      </div>

      <div className="columnaFooter">
      <h3 className="titleFooter">Enlaces útiles</h3>
      <Link to='header' spy={true} smooth={true} offset={50} duration={1800}>
        <p className="datosFooter">Inicio</p></Link>
        <Link to='productos' spy={true} smooth={true} offset={50} duration={1800}><p className="datosFooter">Productos</p></Link>
      
      </div>
      

      </div>
    )
  }
  
  export default Footer;