import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {

    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(true)

    const { id } = useParams()

 
   const dataProduct= 
   [
    {
        id: 1,
        name: 'Dell Vostro 3490',
        marca: 1,
        description: 'Notebook Dell Vostro 3490 negra 14", Intel Core i5 10210U 32GB de RAM 1TB HDD 240GB SSD',
        price: 146000,
        stock: 10,
        img:'dellVostro.png'
    },
    {
        id: 2,
        name: 'Lenovo S340-14API',
        marca: 2,
        description: 'Notebook platinum gray 14", AMD Ryzen 3 3200U 8GB de RAM 1TB HDD, AMD Radeon RX Vega 3 ',
        price: 77900,
        stock: 50,
        img:'lenovo340.webp'
    },
    {
        id: 3,
        name: 'Dell Latitude 3510',
        marca: 1,
        description: 'Notebook Dell Latitude 3510 gris 15.6", Intel Core i5 10210U 8GB de RAM 256GB SSD',
        price: 125000,
        stock: 3,
        img:'dell3510.webp'
    },
    {
        id: 4,
        name: 'Lenovo V15 IIL',
        marca: 2,
        description: 'Intel Core i3 1005G1 8GB de RAM 256GB SSD, Intel UHD Graphics',
        price: 100000,
        stock: 12,
        img:'lenovoV15.webp'
    }
    
]
       

       const getProducts= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProduct)
        }, 2000);
    })
  


    useEffect(() => {
        getProducts.then(resultsProducts => {
            resultsProducts.filter(resultProduct => {
                if (resultProduct.id === parseInt(id)) {
                    setProduct(resultProduct)
                }
            })
            //ocultar loader
            setLoader(false)
        })
    },[])


    return (
      <>
            { loader ? <CircularProgress id="loader" color='success' /> :

        <ItemDetail key={product.id} data={product} /> }
{/*       { product.marca===1? <Dell dete={product} /> : console.log('hola')}
 */}
      </>
    )
  }
  
  
  export default ItemDetailContainer;