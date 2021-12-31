import '../Footer/footer.css'

function Footer() {
    

    return (
      <div className="footer">

        <div className="columnaFooter">
      <h3 className="titleFooter">TuNotebook</h3>
      <p className="datosFooter">Buenos Aires</p>
      <p className="datosFooter">Argentina</p>
      </div>

      <div className="columnaFooter">
      <h3 className="titleFooter">Contacto</h3>
      <p className="datosFooter">Teléfono: 1559300042</p>
      <p className="datosFooter">Email: tunotebook@gmail.com</p>
      </div>

      <div className="columnaFooter">
      <h3 className="titleFooter">Enlaces útiles</h3>
      <p className="datosFooter">Inicio</p>
      <p className="datosFooter">Productos</p>
      <p className="datosFooterDinamicos">Marcas</p>
      <p className="datosFooterDinamicos">Nosotros</p>
      <p className="datosFooterDinamicos">Contacto</p>
      
      </div>

      </div>
    )
  }
  
  export default Footer;