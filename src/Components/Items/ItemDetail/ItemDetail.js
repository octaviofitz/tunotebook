//react
import { Link } from 'react-router-dom'
import React, { useState, useContext } from 'react'
//styles
import '../ItemDetail/itemDetail.css'
//material ui
import Button from '@mui/material/Button';
//components
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../../context/CartContext';


function ItemDetail({data}) {

    //creo Objeto para guardar la compra

  const [itemCart] = useState({
    name: data.name,
    id: data.id,
    price: data.price,
    img: data.img,
    cantidad: 0
})

  const {addProducts} = useContext(CartContext)


  const agregarCart= (value) => {
    if (value >= 1)
    itemCart.cantidad= value 
  }

  

  const enviarProducto = () => {
    if (itemCart.cantidad >= 1){
      addProducts(itemCart)
    } 
  }

    return (
      <>
      <div className='boton-back-detail'>
      <div>
      <Button variant="contained" id="backHome"
       style={{color: 'white', backgroundColor: '#8C7A2D', marginBottom: '0.3rem', padding: '0.2rem'}} 
       ><Link to='/'><i className="fas fa-long-arrow-alt-left"></i></Link></Button>
        </div>
        <div>
        <></>
        </div>
        </div>
        <div className="containerTotalDetalle">
          <div className="detail-product">
            <div className="containerImgDetail">
          <img src={`../../assets/${data.img}`} className="img-detalle" alt="imgDetalle"/>
          </div>
          <div className="containerDataDetail">
          <h2 className="detail-title">{data.name}</h2>
          <h3 className="detail-price">${data.price}</h3>
          <h3 className="detail-envio">Envío 100% bonificado</h3>

          <ItemCount data={data.stock} agregarCart={agregarCart} />

          <h5 className="detail-stock">Stock: {data.stock}</h5>

       {itemCart.cantidad >= 0 ? <Button variant="outlined" size="small" id="addCartDetail" style={{borderRadius: '2px'}} onClick={enviarProducto}>Añadir al carrito</Button> : <></> } 

        {itemCart.cantidad >= 1
         ?
         <Link to='/carrito'><Button variant="outlined" size="small" id="addCartDetail" style={{borderRadius: '2px'}}>Finalizar compra</Button> </Link> 
         : 
         <></>
         }
          </div>
          </div>
          <div className='container-description'>
          <p className='titleDescription'>Descripción del producto: </p>
          <p className="detailDescription">{data.description}</p>
          </div>
          
          </div>

      </>
    )
  }
  
  export default ItemDetail;