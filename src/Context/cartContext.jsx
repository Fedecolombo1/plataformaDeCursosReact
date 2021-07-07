import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [saludo, setSaludo] = useState('Hola')

    const [Carrito, setCarrito] = useState(['prueba'])
    console.log(Carrito);

    /*const addItem = (newItem, quantity) => {
        for (const item of Carrito){
            if(newItem.id !== item.id){
                setCarrito(...Carrito, {newItem, quantity})
            }else{
                item.quantity = quantity
            }
        }
        
    }*/

    const addItem = (newItem, quantity) => {
        setCarrito(newItem)
    }

    const removeItem = (itemId) => {
        const result = Carrito.filter(producto => producto.id !== itemId);
        setCarrito(result)
    }

    const clear = () => {
        setCarrito([])
    }
    
    return(
        <CartContext.Provider value={saludo, Carrito, addItem, removeItem, clear}>
            {children}
        </CartContext.Provider>
    )
}