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

      const totalPrice = products.reduce((a, b) => a + b.price * b.cantidad, 0);


    const data = {
        products,
        addProducts,
        setProducts,
        totalPrice,
    }


    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext