import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import img from "../../images/img-top-why.png";
import "./Cart.css";
import Form from "../Form/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const Cart = () => {
  const { Carrito, removeItem, total, clear } =
    useContext(CartContext);

  //const [linkMp, setLinkMp] = useState();

  const restar = (param) => {
    if (param > 1) {
      return param - 1;
    }
  };
  const sumar = (param) => {
    if (param < 1) {
      return param + 1;
    }
  };

  return (
    <Fragment>
      <h1 className="carritoTitle">Carrito de compras</h1>
      <div className="itemCartContainer row align col-12 col-lg-8">
        <div className="items">
          {Carrito !== undefined ? (
            <>
            {Carrito.map((carrito) => (
              <div className="itemContainer row align col-12" key={carrito.newItem.id}>
                <img
                  src={img}
                  alt=""
                  className="col-5 col-lg-3"
                  style={{ height: "100%", padding: 0 }}
                />
                <div className="col-6">
                  <h3 className="col-12 nombreProducto">
                    {carrito.newItem.title}
                  </h3>
                  <h3 className="col-12 precioProducto">
                    ${carrito.newItem.price}
                  </h3>
                  <div className="cantidad col-10 col-lg-4 align">
                    <button
                      id="menos"
                      className="masMenos align"
                      onClick={(carrito) => {
                        restar(carrito.quantity);
                      }}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      defaultValue={carrito.quantity}
                      className="valor col-3"
                    />
                    <button
                      id="mas"
                      className="masMenos align"
                      onClick={(carrito) => {
                        sumar(carrito.quantity);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-1 align">
                  <FontAwesomeIcon
                    style={{ fontSize: "15px" }}
                    icon={faTrash}
                    onClick={() =>
                      removeItem(
                        carrito.newItem.id,
                        carrito.newItem.price,
                        carrito.quantity
                      )
                    }
                  />
                </div>
              </div> ))}
                
                <div className="col-12 align">
                  <Form />
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

                  
                </div>
                <button
                    className="col-12 btnBorrarItems"
                    onClick={() => clear()}
                  >
                    Borrar items
                </button>
              
            </>
          ) : (
            <>
              <h3 style={{ marginTop: "20px" }}>
                No hay productos en el carrito
              </h3>
              <NavLink className="col-12 align btnPagar" to={"/"}>
                Ir a comprar
              </NavLink>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
