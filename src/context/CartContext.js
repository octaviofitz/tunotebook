import { createContext, useState} from "react";
const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [products, setProducts] = useState([])

    const addProducts = (product) => {
        const exist = products.find((x) => x.id === product.id)
        if (exist) {
          setProducts(
            products.map((x) =>
              x.id === product.id
                ? {
                    ...exist,
                    cantidad: exist.cantidad + product.cantidad,
                  }
                : x
            )
          );
    
        } else {
          setProducts([...products, { ...product, cantidad: product.cantidad }]);
        }
      };

      const limpiarCarrito = () => {
        setProducts([]);
        console.log('listado de productos LIMPIAR CARRITO', setProducts);
      };

    const data = {
        products,
        addProducts,
        setProducts
    }

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext