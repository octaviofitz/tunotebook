//styles
import '../ItemList/ItemList.css'
//material ui
import { CircularProgress } from '@mui/material'
//components
import Item from '../Item/Item'

function ItemList({data, loader, key}) {

  return (
    <>

      { loader ? <CircularProgress id="loader" color='success' /> :
           <div className="containerItemsGeneral">
           {data.map(product => {
              return(
                  <div className='containerItems' key={product.id}>
                { <Item data={product} /> }
                
                </div>
              )
          })}

  </div> 
        }      
    </>
  )
}

export default ItemList;
