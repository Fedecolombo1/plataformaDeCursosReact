import "./CartWidget.css";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import { CartContext } from "../../../Context/cartContext";
import { useContext } from "react";

const CartWidget = () => {

  const { totalItems } = useContext(CartContext);

  return (
    <NavLink to='/cart' className='col-4 col-lg-2 align cartDiv carritoName'>
        <span className='desk align'>Carrito <FontAwesomeIcon className='cartIcon' icon={faShoppingBag} /></span>
        <FontAwesomeIcon className='cartIcon mobile' icon={faShoppingBag} />
        { totalItems 
        ? (<p className="itemsCount">{totalItems}</p>)
        : <></>
        }
    </NavLink>
  );

  
}

export default CartWidget;
