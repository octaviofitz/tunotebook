import {Link} from 'react-router-dom'
import './categories.css'

function CategoriesContainer() {


  return (
    
    <div className='marcas'>

        <div>
        <Link to='/marcas/1'><img src='../../assets/dellLogo.png' className='logoMarcas' alt='logoDell' /></Link>
            </div>
        <div>
        <Link to='/marcas/2'><img src='../../assets/lenovoLogo.png' className='logoMarcas' alt='logoLenovo' /> </Link>
            </div>
           
           </div>
    
  );
}

export default CategoriesContainer;
