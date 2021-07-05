import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [saludo, setSaludo] = useState('Hola')

    const [ItemNuevo, setItemNuevo] = useState()

    const addItem = (item, quantity) => {
        setItemNuevo(item, quantity)
    }
    
    return(
        <CartContext.Provider value={saludo, addItem, ItemNuevo}>
            {children}
        </CartContext.Provider>
    )
}