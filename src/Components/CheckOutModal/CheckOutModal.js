//react
import * as React from 'react';
import { Link } from 'react-router-dom';
//styles
import '../CheckOutModal/checkOutModal.css'
//material ui
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


export default function CheckOutModal({orden}) {
  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} className='title-checkout-widget'>
          ¡COMPRA EXITOSA!
      </BootstrapDialogTitle>
      <DialogContent dividers>
        
       <p className='orden-compra-modal'>Su orden de compra es: {orden}</p>
        
        
          <p className='p-modal-checkout'>Gracias por adquirir nuestros productos.</p>
        
      </DialogContent>
      <DialogActions>
        <Link to='/'>
          <Button autoFocus onClick={handleClose} color='success'>
          Inicio
        </Button>
        </Link>
      </DialogActions>
    </BootstrapDialog>
    </div>
  );
}