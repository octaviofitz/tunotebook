import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import ItemDetail from '../ItemDetail/ItemDetail'
//firebase
import db from '../../firebase'
import {doc, getDoc} from 'firebase/firestore'

function ItemDetailContainer() {

    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()


    async function getProduct(db) {
        const docRef= doc(db, 'productos', id);
        const docSnap= await getDoc(docRef);
        if (docSnap.exists()) {
            let product= docSnap.data();
            product.id= docSnap.id;
            setProduct(product)
            setLoader(false)
        } else {
            console.log('No such document');
        }
    }


    useEffect(() => {
            getProduct(db)
    },[id])


    return (
      <>
            { loader ? <CircularProgress id="loader" color='success' /> :

        <ItemDetail key={product.id} data={product} /> }

      </>
    )
  }
  
  
  export default ItemDetailContainer;