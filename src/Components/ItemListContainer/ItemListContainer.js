import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../ItemListContainer/itemListContainer.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {

    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const {category} = useParams()

 
  const dataProducts= [
      {
          id: 1,
          name: 'Dell Vostro 3490',
          category: 'dell',
          description: 'Notebook Dell Vostro 3490 negra 14", Intel Core i5 10210U 32GB de RAM 1TB HDD 240GB SSD',
          price: 146000,
          stock: 10,
          img:'dellVostro.png'
      },
      {
          id: 2,
          name: 'Lenovo S340-14API',
          category: 'lenovo',
          description: 'Notebook platinum gray 14", AMD Ryzen 3 3200U 8GB de RAM 1TB HDD, AMD Radeon RX Vega 3 ',
          price: 77900,
          stock: 50,
          img:'lenovo340.webp'
      },
      {
          id: 3,
          name: 'Dell Latitude 3510',
          category: 'dell',
          description: 'Notebook Dell Latitude 3510 gris 15.6", Intel Core i5 10210U 8GB de RAM 256GB SSD',
          price: 125000,
          stock: 3,
          img:'dell3510.webp'
      },
      {
          id: 4,
          name: 'Lenovo 435',
          category: 'lenovo',
          description: 'Intel Core i3 1005G1 8GB de RAM 256GB SSD, Intel UHD Graphics',
          price: 100000,
          stock: 12,
          img:'lenovoV15.webp'
      }
  ]
 

  const getProducts= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dataProducts)
    }, 2000);
})

useEffect(() => {
    getProducts.then((resultProducts) => {
        if(category){
            resultProducts.filter(resultProduct => {
                if(resultProduct.category === category) {
                    setProducts(products => [...products, resultProduct])
                    setLoader(false)
                }
            })
        }
        else {
            setProducts(resultProducts)
            //ocultar loader
            setLoader(false)
        }
        
    })
},[])


 
  return (
    <>          
             <ItemList key={products.id} data={products} loader={loader}/>   
      </>
  )
    }


   
export default ItemListContainer;





  
