import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import img from "../../images/img-top-why.png";
import "./Cart.css";
import { useEffect } from "react";
import { useParams } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Cart = () => {
  const { Carrito, removeItem, total, clear, createOrder} = useContext(CartContext);
  console.log(Carrito);

  const [linkMp, setLinkMp] = useState()

  const restar = (param) => {
    if(param > 1 ){return param - 1;}
  }
  const sumar = (param) => {
    if(param < 1){return param + 1;}
  }

  return (
    <>
      <h1 style={{marginTop:'90px'}}>Carrito de compras</h1>
      <div className="itemCartContainer row align col-12">
        <div className="items">
          {Carrito !== undefined ? (
            Carrito.map((carrito) => (
              <div className="itemContainer row align col-12">
                <img
                  src={img}
                  alt=""
                  className="col-5"
                  style={{ height: "100%" }}
                />
                <div className="col-6">
                  <h3 className="col-12 nombreProducto">{carrito.newItem.title}</h3>
                  <h3 className="col-12 precioProducto">${carrito.newItem.price}</h3>
                  <div className="cantidad col-10 align">
                    <button id="menos" className="masMenos align" onClick={(carrito) => {restar(carrito.quantity)}}>
                      -
                    </button>
                    <input type="text" value={carrito.quantity} className="valor col-3" />
                    <button id="mas" className="masMenos align" onClick={(carrito) => {sumar(carrito.quantity)}}>
                      +
                    </button>
                  </div>
                </div>
                <div className="col-1 align">
                  <FontAwesomeIcon
                    style={{ fontSize: "15px" }}
                    icon={faTrash}
                    onClick={() => removeItem(carrito.newItem.id,carrito.newItem.price,carrito.quantity)}
                  />
                </div>
              </div>
            ))
          ) : (
            <>
              <h3 style={{marginTop:'20px'}}>
                No hay productos en el carrito
              </h3>
                <NavLink className="col-12 align btnPagar" to={"/"}>
                Ir a comprar
              </NavLink>
            </>
          )}
        </div>
        <div className="col-12 row align">
          <div className="subTotal col-12 row align">
            <h1 className="col-6 subtotal">Subtotal:</h1>
            <h1 className="col-6 precioSub">${total}</h1>
          </div>
          <div className="Total col-12 row align">
            <h1 className="col-6 total">Total:</h1>
            <h1 className="col-6 precio">${total}</h1>
          </div>
          <NavLink className="col-12 align btnPagar" to={`/pagar?title=DisenioUx&price=2500`} onClick={() => {createOrder()}}>
            Pagar
          </NavLink>
          <button className="col-12 btnBorrarItems" onClick={() => clear()}>Borrar items</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
