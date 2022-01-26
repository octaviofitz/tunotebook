//styles
import '../About/about.css'
//components
import BannerIMG from '../../NavBar/Banner/BannerIMG/BannerIMG';

function About() {


    return (
        <section className='about' id='about'>  
        <BannerIMG />
        <div className='container-about'>

        <div className='container-data-about'>
          <h1 className='title-about'>Sobre nosotros</h1>
          <p className='data-about'>Somos <b>Tu Notebook</b>, una empresa nacida en el año 2021.</p>
          <p className='data-about'> Entendemos y sentimos la importancia que tienen las computadoras para poder desarrollarnos en sociedad. Hoy en día, parece una utopía poder estudiar o comunicarse sin integrarnos al mundo digital.</p>
           <p className='data-about'>Es por ello que nuestra misión como empresa es poder llevarle al cliente los mejores productos al mejor precio del mercado.Contamos con todo tipo de computadoras para que puedas elegir la que más se adecúe a tus necesidades.</p>
          <p className='data-about'> Nuestro local se encuentra en el barrio Adrogué, zona sur de la Provincia de Buenos Aires.</p>
        </div>

        <div className='container-image-about'>

          <img src='/localBig.jpg' alt='localDesktop' className='localDesktop' />
     
        </div>


        </div>
        </section>
       )
     }
     
     export default About;