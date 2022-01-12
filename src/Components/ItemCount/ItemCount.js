import React, {useState} from 'react'
import '../ItemCount/ItemCount.css'
import Button from '@mui/material/Button';

function ItemCount({data, agregarCart}) {

     //Creo variable para sumar productos al carrito
  const [itemCount, setItemCount] = useState(0)

     const onAdd = () => {
        if (itemCount < data ) {
        setItemCount(itemCount + 1)
        agregarCart(itemCount + 1)
    }
    }

    const onRemove = () => {
         if (itemCount <= 1 ) {
          setItemCount(itemCount)
        } else{
          setItemCount(itemCount -1)      
        }         
    }
 
   

  return (
    <>

      <div className='botonesDetail'>
          <Button variant="outlined" color='success' size="small" style={{maxWidth: '2rem', maxHeight: '2rem', minWidth: '2rem', minHeight: '2rem', backgroundColor:'#8C7A2D', color: '#FDFDFD', borderRadius: '2px',  border: 'none'}} onClick={onAdd}>+</Button>
          <p className='itemCountDetail'>{itemCount}</p>
          <Button variant="outlined" color="success" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', backgroundColor:'#8C7A2D', color: '#FDFDFD', borderRadius: '2px', border: 'none'}} onClick={onRemove} >-</Button>
          </div>
      
    </>
  )
}

export default ItemCount;
