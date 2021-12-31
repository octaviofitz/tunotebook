import { Link } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import '../ItemDetail/itemDetail.css'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';


function ItemDetail({data}) {

    //creo Objeto para guardar la compra

  const [itemCart, setItemCart] = useState({
    name: data.name,
    id: data.id,
    price: data.price,
    img: data.img,
    cantidad: 0
})

  const {addProducts} = useContext(CartContext)


  const agregarCart= (value) => {
    console.log('Item agregados: ', value)
    itemCart.cantidad= value
  }
  
  const enviarProducto = () => {
    addProducts(itemCart)
    console.log("Producto: ", itemCart);
  }


    return (
      <>
        <div className="containerTotalDetalle">
          <div className="detail-product">
            <div className="containerImgDetail">
          <img src={`../../assets/${data.img}`} className="img-detalle" alt="imgDetalle"/>
          </div>
          <div className="containerDataDetail">
          <h2 className="detail-title">{data.name}</h2>
          <h3 className="detail-price">$ {data.price}</h3>
          <h3 className="detail-envio">Envío 100% bonificado</h3>

          <ItemCount data={data.stock} agregarCart={agregarCart}/>

          <h5 className="detail-stock">Stock: {data.stock}</h5>

        <Button variant="outlined" size="small" id="addCartDetail" style={{borderRadius: '2px'}} onClick={enviarProducto}>Añadir al carrito</Button> 

        {itemCart.cantidad===0? <></> : 
       <Link to='/carrito'><Button variant="outlined" size="small" id="addCartDetail" style={{borderRadius: '2px'}}>Finalizar compra</Button> </Link>
         }
          </div>
          </div>
          <p className='titleDescription'>Descripción del producto:</p>
          <p className="detailDescription">{data.description}</p>
          
          </div>

      </>
    )
  }
  
  export default ItemDetail;