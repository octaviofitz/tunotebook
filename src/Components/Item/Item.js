//react
import {Link} from 'react-router-dom'
//styles
import '../Item/item.css'
//material ui
import Button from '@mui/material/Button';

function Item({data}) {
 
  return (
    <>
     <div className="productos">
            <div>  
       <img src={`../../assets/${data.img}`} className="img-producto" alt="imgProducto"/>
       <h3 className="titleProduct">{data.name}</h3>
      <p className="priceItem">${data.price}</p>


      <Button variant="contained" id="addCart"><Link to={`/producto/${data.id}`}>Ver producto</Link></Button>
       
     
         </div> 
      
      </div>  
    </>
  )
}

export default Item;
