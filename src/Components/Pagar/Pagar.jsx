import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const Pagar = () => {
    const [estado, setEstado] = useState('')
    
    axios.post('/checkout').then((response) => {
        console.log(response);
        setEstado(response.data)
    })

    return(
        <>
            <a href={estado}>pagar</a>
        </>
    )
}

export default Pagar;