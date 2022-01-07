import { CircularProgress } from '@mui/material'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'


function ItemList({data, loader}) {

  return (
    <>

      { loader ? <CircularProgress id="loader" color='success' /> :
           <div className="containerItemsGeneral">
           {data.map(product => {
              return(
                  <div className='containerItems'>
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
