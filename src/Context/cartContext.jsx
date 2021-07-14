import { createContext, useState } from "react";
import { dataBase } from "../Firebase/firebase";
import firebase from "firebase";
import '@firebase/firestore'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [saludo, setSaludo] = useState('Hola')

    const [Carrito, setCarrito] = useState()
    console.log(Carrito);

    const [total, setTotal] = useState(0)

    const [totalItems, setTotalItems] = useState()

    /*const addItem = (newItem, quantity) => {
        for (const item of Carrito){
            if(newItem.id !== item.id){
                setCarrito([...Carrito, {newItem, quantity}])
            }else{
                item.quantity = quantity
            }
        }
        
    }*/

    const sumaTotal = (precio, quantity) => {
        let resultado = total + (precio*quantity)
        setTotal(resultado)
    }

    const sumaContadorCarrito = (quantity) => {
        if(totalItems !== undefined){
            setTotalItems(totalItems + quantity)
        }else{
            setTotalItems(quantity)
        }
    }

    const addItem = (newItem, quantity) => {
        if(Carrito !== undefined){
            for (let item of Carrito){
                if(item.newItem.id !== newItem.id){
                    setCarrito([...Carrito, {newItem, quantity}])
                    sumaTotal(newItem.price, quantity)
                    sumaContadorCarrito(quantity)
                } else{
                    item.quantity = item.quantity + quantity
                    sumaTotal(newItem.price, quantity)
                    sumaContadorCarrito(quantity)
                }
            }
        }else{
            setCarrito([{newItem, quantity}])
            sumaTotal(newItem.price, quantity)
            sumaContadorCarrito(quantity)
        }
    }

    const removeItem = (itemId, precio, quantity) => {
        const result = Carrito.filter(producto => producto.newItem.id !== itemId);
        if(result == (0)){
            setCarrito(undefined)
        } else {
            setCarrito(result)
        }
        setTotal(total - (precio*quantity))
        setTotalItems(totalItems - quantity)
    }

    const clear = () => {
        setCarrito(undefined)
        setTotal(0)
        setTotalItems()
    }

    const createOrder = () => {
        const items = Carrito.map(
            ({newItem}) => ({
                id: newItem.id,
                title: newItem.title,
                price: newItem.price
            })
        )

        const newOrder = {
            buyer: {
                name: 'Federico',
                phone: 1167048339,
                email: 'colombofederico17@gmail.com'
            }, 
            items,
            total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db = dataBase;
        const orders = db.collection("orders");

        orders.add(newOrder).then(({id}) => {
            console.log(id);
        }).catch(err => {
            console.log(err);
        })

    }
    
    return(
        <CartContext.Provider value={{saludo, Carrito, addItem, removeItem, clear, total, totalItems, createOrder}}>
            {children}
        </CartContext.Provider>
    )
}