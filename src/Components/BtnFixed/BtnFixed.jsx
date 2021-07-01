import "./BtnFixed.css";
import { NavLink } from "react-router-dom";


const BtnFixed = () => {
    return(
        <>
            <NavLink to='/category/cursos' className="btnFixed align col-12 mobile">
                Ver Cursos
            </NavLink>
        </>
    )
}

export default BtnFixed