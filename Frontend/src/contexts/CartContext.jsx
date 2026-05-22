import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        const pizzaExiste = cart.find(
            p => p.id === pizza.id
        );
        if (pizzaExiste) {
            const carritoActualizado = cart.map(p =>
                p.id === pizza.id
                    ? { ...p, count: p.count + 1 }
                    : p
            );
            setCart(carritoActualizado);
        } else {
            setCart([
                ...cart,
                { ...pizza, count: 1 }
            ]);

        }
    };

    const modificarCantidad = (operacion, id) => {

    const carritoActualizado = cart.map(p => {
        if (p.id === id) {
            if (operacion === "suma") {
                return {
                    ...p,
                    count: p.count + 1
                };
            }
            if (operacion === "resta") {
                return {
                    ...p,
                    count: p.count - 1
                };
            }
        }
        return p;
    });

    const carritoFiltrado = carritoActualizado.filter(
        p => p.count > 0
    );
    setCart(carritoFiltrado);
};

    return (
        <CartContext.Provider value={{ cart, addToCart, modificarCantidad }}>
            {children}
        </CartContext.Provider>
    )


}

export default CartProvider;
