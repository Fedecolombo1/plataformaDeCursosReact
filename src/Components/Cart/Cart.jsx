import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";
import img from '../../images/img-top-why.png'
import './Cart.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const saludo = useContext(CartContext);
  const Carrito = useContext(CartContext);
  const removeItem = useContext(CartContext);
  const clear = useContext(CartContext);
  console.log(Carrito);
  console.log(saludo);

  return (
    <>
    { Carrito ? (Carrito.map(item => 
      <h1 style={{ marginTop: "120px" }}>{item.title}</h1>
    ))
    :
    <h1 style={{ marginTop: "120px" }}>nada</h1>
    }
      <p>Carrito</p>
      <p>{saludo} mundo</p>
      <h1>Carrito de compras</h1>
      <div className="itemContainer row align col-12">
        <img src={img} alt="" className="col-5" style={{height:'100%'}}/>
        <div className="col-6">
            <h3 className="col-12 nombreProducto">Producto</h3>
            <h3 className="col-12 precioProducto">$5.800</h3>
            <div className="cantidad col-10 align">
              <button
                id="menos"
                className="masMenos align"
              >
                -
              </button>
              <input type="text" value='1' className="valor col-3" />
              <button id="mas" className="masMenos align" >
                +
              </button>
            </div>
        </div>
        <div className="col-1 align">
            <FontAwesomeIcon
            style={{fontSize: "15px" }}
            icon={faTrash}
            onClick={() => removeItem()}
            />
        </div>
      </div>
      <button onClick={() => clear()}>Borrar todos los items</button>
    </>
  );
};

export default Cart;
