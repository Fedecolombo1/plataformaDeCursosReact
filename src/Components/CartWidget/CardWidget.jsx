import "./CartWidget.css";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner() {

  return (
    <div className='col-4 col-lg-2 align cartDiv'>
        <a href='/carrito' className='desk align carritoName'>Carrito <FontAwesomeIcon className='cartIcon' icon={faShoppingBag} /></a>
        <FontAwesomeIcon className='cartIcon mobile' icon={faShoppingBag} />
    </div>
  );

  
}

export default Banner;
