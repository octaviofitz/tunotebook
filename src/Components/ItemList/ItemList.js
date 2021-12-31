import { CircularProgress } from '@mui/material'
import Item from '../Item/Item'
import '../ItemList/itemList.css'


function ItemList({data, loader}) {

  return (
    <>

      { loader ? <CircularProgress id="loader" color='success' /> :
           <div className="containerPrueba">
           {data.map(product => {
              return(
                  <div>
                { <Item key={product.id} data={product} /> }
                
                </div>
              )
          })}

  </div> 
        }      
    </>
  )
}

export default ItemList;
