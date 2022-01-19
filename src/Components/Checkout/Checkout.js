//react
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
//styles
import '../Checkout/checkout.css'
//components
import CheckOutModal from '../CheckOutModal/CheckOutModal'
import CartContext from '../../context/CartContext'
//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//firebase
import db from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

function Checkout() {

   const [orderId, setOrderId]= useState() 
   const [open, setOpen] = useState(false);

  
  const {products, totalPrice} = useContext(CartContext)
  
   const [formData, setFormData]= useState(
    {
      name: '',
      phone: '',
      mail: ''
    }
  ) 

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange= (e) => {
    const {name, value}= e.target;
    setFormData({...formData, [name] : value})
  }

  const sendOrder = () => {
    let order= {}
    order.buyer= formData;
    order.items= products;
    order.total= totalPrice;
    pushOrder(order) 
  } 

    const pushOrder= async(order) => {
    const orderFirebase= collection(db, 'ordenes')
    const orden= await addDoc(orderFirebase, order)
    setOrderId(orden.id)
  } 
 
  return (
    <div>   
         
    
        {orderId != null ? <CheckOutModal
      open={open} 
      handleClose={handleClose} 
      products={products} 
      total={totalPrice}
      orden={orderId} 
    /> :
    <div className='container-form-general'>
    <h3 className='title-checkout'>Complete sus datos personales</h3>
    <Box
      component="form" 
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='container-form'
    >
              
      <TextField id="outlined-basic" label="Nombre y apellido" name='name' variant="outlined" color='success' size='string' value={formData.name} onChange={handleChange} />
      <TextField id="outlined-basic" label="Correo electrónico" name='mail' variant="outlined" color='success' value={formData.mail} onChange={handleChange}/>
      <TextField id="outlined-basic" label="Teléfono" name='phone' type='number' variant="outlined" color='success' value={formData.phone} onChange={handleChange}/>

     <Button variant='contained' style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.2rem', marginTop: '2rem'}} className='finalizar-cart' onClick={sendOrder}>Finalizar compra</Button>
     

      <Link to='/carrito'><p className='backCart'>Volver al carrito</p></Link>
        
    </Box>
    </div>
}
          </div>
         
  );
}

export default Checkout;
