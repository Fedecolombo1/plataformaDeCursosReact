import { CartContext } from "../../Context/cartContext"
import { useContext } from "react"

const Cart = () => {  
    const saludo = useContext(CartContext)
    const ItemNuevo = useContext(CartContext)
    
    return(
        <>
            <h1 style={{marginTop:'120px'}}>{ItemNuevo}</h1>
            <p>Carrito</p>
            <p>{saludo} mundo</p>
        </>
    )
}

export default Cart