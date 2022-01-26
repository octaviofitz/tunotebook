//react
import {useState} from 'react'
//styles
import '../Contact/contact.css'
//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//firebase
import db from '../../../Firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
//validator 
import validator from 'validator';

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


//validaciones
const [errorFormulario, setErrorFormulario] = useState(false);
const [mensaje, setmensaje] = useState('')

const handleSetOrder = async () => {
  //Primero validamos campos del Formulario
  const { name, phone, mail, msg } = formContact;
  const nameValidate = validator.isLength(name, {min: 3});
  const mailValidate = validator.isEmail(mail);
  const phoneValidate = validator.isNumeric(phone, {no_symbols: false})
  const msgValidate = validator.isLength(msg, {max:500, min:20});

  if( !nameValidate || !mailValidate || !phoneValidate || !msgValidate ) {
      //Error si no se completa correctamente los campos del formulario
      setErrorFormulario(true);
      setTimeout(() => {
          setErrorFormulario(false)
          setmensaje('Revise que los campos del formulario estén correctos. Su mensaje debe tener entre 20 y 500 caracteres.')
      }, 1000);
      return;
  };

    let contacto= {}
    setmensaje('')
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
          id="outlined-multiline-flexible-helper-text"
          label="Mensaje"
          name='msg'
          color='success'
          value={formContact.msg}
          multiline
          error={errorFormulario}
          helperText={mensaje}
          maxRows={8}
          onChange={handleChange}
        />

      <Button
       variant='contained'
       style={{borderRadius: '2px', backgroundColor: '#0F2E20', marginBottom: '1.2rem', marginTop: '2rem'}}
        className='finalizar-cart'
         onClick={handleSetOrder}>
           Enviar
           </Button>

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
