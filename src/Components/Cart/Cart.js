//react
import { Link } from 'react-router-dom'
//context
import CartContext from '../../context/CartContext'
import {useContext} from "react";
//styles
import '../Cart/cart.css'
//material ui
import { Button } from '@mui/material';


function Cart() {

  const {products, setProducts, totalPrice} = useContext(CartContext);
  
  const LimpiarCarrito = () => {
    setProducts([]);
    localStorage.clear()
  };

  const eliminarItem = (event, product) => { 
    const deleted = products.filter(
      (product) => product.id !== event.target.id,
    )
    setProducts(deleted)
  }
  ;
               
    return (
     <>
          <h3 className='cartTitle'>Carrito de compras</h3>
          <Link to='/'><p className="seguir-comprando-cart">Seguir comprando</p></Link>
          

        <div className='Container-Carrito'>
        {products.map((product)=> {
          return(
            <div className='container-cart' key={product.id}>
              <div className='container-imagen'>
              <div>
             <img src={`../assets/${product.img}`} className='img-cart' alt='{product.name}' />
             </div>
             </div>
             <div className='container-data'>
             <div className='productName-cart'>
               <p className='data-compra'>Producto</p>
             <p>{product.name}</p>
             </div>
             <div className='productCantidad-cart'>
               <p className='data-compra'>Cantidad</p>
               <p>{product.cantidad}</p>
             </div>
             <div className='eliminar-cart'>
               <p className='data-compra'>Eliminar</p>
               <button id={product.id} className="x-eliminar-cart" onClick={eliminarItem}>X</button>
             </div>
             <div className='productPrice-cart'>
             <p className='data-compra'>Precio unidad</p>
             <p>${product.price}</p>
             <p id={product.id} className="x-eliminar-cart-mobile" onClick={eliminarItem}>Eliminar X</p>
             </div>
             </div>
             
            </div>
            
          )
        })}
        
        {
          products.length>0 
          ? 
          <div className='price-limpiar-container'>
             <div>
             <p onClick={LimpiarCarrito} className='limpiarCart'>Limpiar carrito</p>
               </div> 
               <div>
          <p className='total-price-cart'>Total: ${totalPrice} </p>
          </div>
          </div>
          :
          <></>
        }
       

          {
          products.length>0 
          ? 
          <div className="botones-Cart">
              
             <Link to='/checkout'>
               <Button variant='contained' style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.5rem', marginTop: '1.5rem'}} className='finalizar-cart'>CONTINUAR</Button>
               </Link>
              </div>
               :
                <></> 
                }

        </div> 
        
        </>
    )
  }

  
  export default Cart;