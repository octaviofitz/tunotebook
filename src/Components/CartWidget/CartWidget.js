//react
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
//styles
import '../CartWidget/CartWidget.css'
//material ui
import Button from '@mui/material/Button';
//context
import CartContext from '../../context/CartContext'


function CartWidget() {

  const {products} = useContext(CartContext)

  const [mostrarCarrito, setMostrarCarrito ] = useState(false)
  useEffect(() => {
  })

  const abrirCarrito = () => {
      setMostrarCarrito(!mostrarCarrito)
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
            <div className='container-widget-cart' key={product.id}>
              <div>
                <img src={`../assets/${product.img}`} className='img-cart-widget' alt={product.name}/>
                </div>
              <div>
                <span className='name-cart-widget'>{product.name}
                </span>
                </div>
              <div>
                <span className='cantidad-cart-widget'><b>Cant:</b> {product.cantidad}</span>
                </div>          
            </div>
          )
         }
        
  )  : <></>
}           
            {products.length === 0 
            ? 
            <></>
            : 
            <Link to='/carrito'>
              <Button variant="outlined" size="small" id="addCartDetailWidget" className='boton-cart-widget' style={{borderRadius: '2px', color: 'white', backgroundColor: '#8C7A2D', border: 'none'}} >Carrito</Button>
              </Link>}
         

</div>
</i> 
        
      
     

</>
  )
}  
export default CartWidget;
