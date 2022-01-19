//styles
import './about.css'
//components
import BannerIMG from '../Banner/BannerIMG/BannerIMG'

function About() {
    return (
        <section className='about'>  
        <BannerIMG />
        <div className='container-about'>
        <div className='container-data-about'>
          <h1 className='title-about'>Sobre nosotros</h1>
          <p className='data-about'>Somos <b>Tu Notebook</b>, una empresa creada en el año 2020. Estamos ubicados en el barrio Adrogué, zona sur de la Provincia de Buenos Aires.</p>
        </div>

        <div className='container-mapa-about'>
         
          <img src='/map.jpg' alt='map-about' className='map-about'/>
        </div>
        </div>
        </section>
       )
     }
     
     export default About;