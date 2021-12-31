import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ContactPage from '../../pages/ContactPage/ContactPage'
import AboutPage from '../../pages/AboutPage/AboutPage'
import HomePage from '../../pages/HomePage/HomePage'
import ProductDetailPage from '../../pages/ProductDetail/ProductDetailPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import CategoriesPages from '../../pages/CategoriesPages/CategoriesPages';
import CartPage from '../../pages/CartPage/CartPage'
import { CartProvider } from '../../context/CartContext.js'

function AppRouter() {
    return (
        
        <BrowserRouter>
        
        <CartProvider>
        <NavBar />
        <Banner />

        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/producto/:id' element={<ProductDetailPage />} />
        <Route path='/marcas/:category' element={<CategoriesPages />} />
        <Route path='/contacto' element={<ContactPage />} />
        <Route path='/nosotros' element={<AboutPage />} />
        <Route path='/carrito' element={<CartPage />} /> 

        <Route path='*' element={<NotFoundPage />} />
 
        </Routes>

        </CartProvider>

        <Footer />
        
        </BrowserRouter>

       )
     }
     
     export default AppRouter;