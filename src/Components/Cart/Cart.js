import { createContext, useState} from "react";
import { Link } from 'react-router-dom'
import '../Cart/cart.css'
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext'
import {useContext} from "react";

function Cart() {

  const {products} = useContext(CartContext)
  const {setProducts } = useContext(CartContext);


  console.log('productos agregados al carrito:', products);


  const LimpiarCarrito = () => {
    setProducts([]);
  };

  const eliminarItem = (event) => { 
    const deleted = products.filter(
      (product) => product.id !== parseInt(event.target.id)
    );
    setProducts(deleted);
  };

    return (
     <>
          <h3 className='cartTitle'>Carrito de compras</h3>

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
               <p className='data-compra'>Producto: </p>
             <p>{product.name}</p>
             </div>
             <div className='productCantidad-cart'>
               <p className='data-compra'>Cantidad: </p>
               <p>{product.cantidad}</p>
             </div>
             <div className='eliminar-cart'>
               <p className='data-compra'>Eliminar: </p>
               {/* <p className="x-eliminar-cart" onClick={eliminarItem}>X</p> */}
               <button id={product.id} className="x-eliminar-cart" onClick={eliminarItem}>X</button>
             </div>
             <div className='productPrice-cart'>
             <p className='data-compra'>Precio: </p>
             <p>${product.price}</p>
             </div>
             </div>

            
                        

            
            </div>
          )
        })}
        <div className="botones-Cart">
               <Button onClick={LimpiarCarrito} variant='contained' style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.5rem', marginTop: '1.5rem' }}>Limpiar carrito</Button>
             <Link to='/'><Button variant="contained" className="button-limpiar-cart"  style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.5rem', marginTop: '1.5rem'}}>Seguir comprando</Button></Link>
              <Button variant='contained' style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.5rem', marginTop: '1.5rem' }}>Finalizar compra</Button>
              </div>

        </div>
        </>
    )
  }
  
  export default Cart;