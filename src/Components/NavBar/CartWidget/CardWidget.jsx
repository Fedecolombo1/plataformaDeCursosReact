import "./CartWidget.css";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const CartWidget = () => {

  return (
    <NavLink to='/cart' className='col-4 col-lg-2 align cartDiv'>
        <a href='/carrito' className='desk align carritoName'>Carrito <FontAwesomeIcon className='cartIcon' icon={faShoppingBag} /></a>
        <FontAwesomeIcon className='cartIcon mobile' icon={faShoppingBag} />
    </NavLink>
  );

  
}

export default CartWidget;
