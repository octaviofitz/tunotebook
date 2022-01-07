import { Link } from 'react-router-dom'
import '../Cart/cart.css'
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext'
import {useContext} from "react";

function Cart() {

  const {products} = useContext(CartContext)
  const {setProducts } = useContext(CartContext);


  const LimpiarCarrito = () => {
    setProducts([]);
  };

  const eliminarItem = (event) => { 
    const deleted = products.filter(
      (product) => product.id !== event.target.id,
    );
    setProducts(deleted);
  };

  const totalPrice = products.reduce((a, b) => a + b.price * b.cantidad, 0);


    return (
     <>
          <h3 className='cartTitle'>Carrito de compras</h3>
          <Link to='/'><p className="seguir-comprando-cart">Seguir comprando</p></Link>
          

        <div className='Container-Carrito'>
        {products.map((product)=> {
          return(
            <div className='container-cart'>
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
             <p className='data-compra'>Precio</p>
             <p>${product.price}</p>
             <p id={product.id} className="x-eliminar-cart-mobile" onClick={eliminarItem}>Eliminar X</p>
             </div>
             </div>
             
            </div>
            
          )
        })}
        {
          products.length>0 
          ? <div className='price-limpiar-container'>
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
               {/* <Button onClick={LimpiarCarrito} variant='contained' style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.5rem', marginTop: '1.5rem' }}>Limpiar carrito</Button> */}
              <Button variant='contained' style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.5rem', marginTop: '1.5rem'}} className='finalizar-cart'>Finalizar compra</Button>
              </div>
               :
                <></> 
                }

        </div> 
        
        </>
    )
  }
  
  export default Cart;