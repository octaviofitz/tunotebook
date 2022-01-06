import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
//firebase
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore';


function ItemListContainer() {

    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const {category} = useParams()

 
    //Conexión con FireBase
    async function getProducts(db){
        const productosCol = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc => {
            let producto = doc.data()
            producto.id= doc.id
            return producto
        }) 
        return productosList;
    }

useEffect(() => {
    getProducts(db).then((resultProducts) => {
        if(category){
            setProducts([])
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
},[category])


 
  return (
    <>          
             <ItemList key={products.id} data={products} loader={loader}/>   
      </>
  )
    }
   
export default ItemListContainer;





  
