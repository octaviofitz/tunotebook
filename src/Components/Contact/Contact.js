//react
import {useState} from 'react'
//styles
import '../Contact/contact.css'
//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//firebase
import db from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

function Contact() {

  const [orderContacto, setOrderContacto]= useState() 
 
  const [formContact, setFormContact]= useState(
   {
     name: '',
     phone: '',
     mail: '',
     msg: ''
   }
 ) 

 const handleChange= (e) => {
  const {name, value}= e.target;
  setFormContact({...formContact, [name] : value})
}



 const sendFormContact = () => {
   let contacto= {}
   contacto.usuario= formContact;
   pushFormContact(contacto) 
 } 

   const pushFormContact= async(contacto) => {
   const orderFirebase= collection(db, 'formularioContacto')
   const orderContacto= await addDoc(orderFirebase, contacto)
   setOrderContacto(orderContacto.id)
 } 

 return (

  <section className='container-contact'>
    <div className='container-info-contact'>
         <h2 className='title-info-contact'>Ayudanos a mejorar</h2>
         <span className='data-info-contact'>Desde <b>TuNotebook</b> consideramos muy importante la relación con nuestros usuarios. Por ello, con el fin de mejorar su experiencia a la hora de comprar, hemos decidido abrir este espacio para que nos brinden sus sugerencias y consultas sobre nuestra página web</span>
         <p className='data-info-contact'>¡Gracias por colaborar con nosotros!</p>
         </div>
      <div className='container-form-contact'>
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
              
      <TextField id="outlined-basic" label="Nombre y apellido" name='name' variant="outlined" color='success' size='string' value={formContact.name} onChange={handleChange} />
      <TextField id="outlined-basic" label="Correo electrónico" name='mail' variant="outlined" color='success' value={formContact.mail} onChange={handleChange}/>
      <TextField id="outlined-basic" label="Teléfono" name='phone' type='number' variant="outlined" color='success' value={formContact.phone} onChange={handleChange}/>
      
      <TextField
          id="outlined-multiline-flexible"
          label="Mensaje"
          name='msg'
          color='success'
          value={formContact.msg}
          multiline
          maxRows={8}
          onChange={handleChange}
        />

      <Button variant='contained' style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.2rem', marginTop: '2rem'}} className='finalizar-cart' onClick={sendFormContact}>Enviar</Button>

      {
      orderContacto 
      !=
      null
       ?
        <p className='msg-success'>Su mensaje ha sido enviado</p> 
        :
         <></>
         }
        
      </Box>
      </div>

          </section>
        
      );
      }
      export default Contact;
