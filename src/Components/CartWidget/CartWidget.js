import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../CartWidget/CartWidget.css'
import Button from '@mui/material/Button';
//context
import CartContext from '../../context/CartContext'
import {useContext} from "react";


function CartWidget() {

  const {products} = useContext(CartContext)


  const [mostrarCarrito, setMostrarCarrito ] = useState(false)
  useEffect(() => {
  })

  const abrirCarrito = () => {
      setMostrarCarrito(!mostrarCarrito)
      /* console.log('productos del context:', products); */
  }

 
  return (

    <>
      <i className="fas fa-shopping-cart" onClick={abrirCarrito}>
        {products.length === 0 ? <></>: <span className='products-length-widget'>{products.length}</span>}
        <div className={`${mostrarCarrito ? "cartWidget" : "ocultarCart"}`}>
          <h3 className='title-cart'>Productos añadidos:</h3>
          {products.length === 0 ? <p className='cart-vacio-widget'>Carrito vacío</p>: <></>}
        {mostrarCarrito ?  products.map((product)=> {
          return(       
            <div className='container-widget-cart'>
              <div>
                <img src={`../assets/${product.img}`} className='img-cart-widget' />
                </div>
              <div>
                <span className='nombre-PROD' className='name-cart-widget'>{product.name}</span>
                </div>
              <div>
                <span className='cantidad-cart-widget'><b>Cant:</b> {product.cantidad}</span>
                </div>          
            </div>
          )
         }
        
  )  : <></>
}           
            {products.length === 0 ? <></>: <Link to='/carrito'><Button variant="outlined" size="small" id="addCartDetail" className='boton-cart-widget' style={{borderRadius: '2px', marginLeft: '10.5rem', marginBottom: '1.5rem', marginTop: '1.5rem'}}>Carrito</Button></Link>}

          

</div>
</i> 
        
      
     

</>
  )
}  
export default CartWidget;
