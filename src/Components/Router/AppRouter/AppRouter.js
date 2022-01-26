//react
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//context
import { CartProvider } from '../../../context/CartContext'
//components
import NavBar from '../../NavBar/NavBar/NavBar';
import Banner from '../../NavBar/Banner/BannerTexto/Banner';
import Footer from '../../Footer/Footer';
import ContactPage from '../../../pages/ContactPage/ContactPage'
import AboutPage from '../../../pages/AboutPage/AboutPage'
import HomePage from '../../../pages/HomePage/HomePage'
import ProductDetailPage from '../../../pages/ProductDetail/ProductDetailPage';
import NotFoundPage from '../../../pages/NotFoundPage/NotFoundPage'
import CategoriesPages from '../../../pages/CategoriesPages/CategoriesPages';
import CartPage from '../../../pages/CartPage/CartPage'
import CheckoutPage from '../../../pages/CheckoutPage/Checkoutpage'
import CheckOutOrder from '../../../pages/CheckoutPage/CheckOutOrder';
import ScrollToTop from '../../Secciones/ScrollToTop/ScrollToTop';


function AppRouter() {
    return (
        
        <BrowserRouter>
        
        <CartProvider>
          <ScrollToTop />
        <NavBar />
        <Banner />

        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/producto/:id' element={<ProductDetailPage />} />
        <Route path='/marcas/:category' element={<CategoriesPages />} />
        <Route path='/contacto' element={<ContactPage />} />
        <Route path='/nosotros' element={<AboutPage />} />
        <Route path='/carrito' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />}  />
        <Route path='/checkout/order' element={<CheckOutOrder />}  />

        <Route path='*' element={<NotFoundPage />} />
 
        </Routes>

        </CartProvider>

        <Footer />
        
        </BrowserRouter>

       )
     }
     
     export default AppRouter;