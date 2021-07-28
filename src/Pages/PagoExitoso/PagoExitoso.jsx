import './PagoExitoso.css'
import Page from '../../Components/Page/Page'
import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";
import { NavLink } from 'react-router-dom';

const PagoExitoso = () => {
    const { orderId} =
    useContext(CartContext);

    return(
        <Page>
            <div className="caja col-12 align row">
                <h1 className='tituloGracias col-12'>Gracias por tu compra!🎉🎉</h1>
                <p className="numOrden col-12">Numero de orden de compra : <span className='italic'>{orderId}</span></p>
                <NavLink to='/' className='btnVolverHome col-5 align'>
                    Volver al home
                </NavLink>
            </div>
        </Page>
    )
}

export default PagoExitoso;