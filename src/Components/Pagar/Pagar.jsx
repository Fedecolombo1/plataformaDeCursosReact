import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Pagar = () => {
    const [estado, setEstado] = useState('')
    
    axios.get('/checkout').then((response) => {
        console.log(response.data);
        setEstado(response.data)
    })

    return(
        <>
            <Link to={estado}></Link>
        </>
    )
}

export default Pagar;