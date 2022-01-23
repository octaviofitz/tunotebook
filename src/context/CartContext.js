import { createContext, useState, useEffect} from "react";
const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("productos")) || [])
    const [totalProducts, setTotalProducts] = useState(0)

  
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
/*           productsStorage(product)
 */        }
      };

      const totalPrice = products.reduce((a, b) => a + b.price * b.cantidad, 0);

      /* const productsStorage= (product) => {
        localStorage.setItem("productos", JSON.stringify([...products, product]));
      } */

      useEffect(() => {
        
        //Actualizamos el localStorage cuando se modificar el carrito
        localStorage.setItem("productazos", JSON.stringify(products));
        
        //Obtnemos el total de la cantidad de productos que hay en el carrito
        let totalQuantity = 0;
        products.forEach( c => {
            totalQuantity = totalQuantity + c.quantity
        })

        setTotalProducts(totalQuantity)
    }, [products])

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