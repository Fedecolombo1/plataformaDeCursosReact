import { React, useState } from 'react';
import './ItemCount.css'


const ItemCount = (props) => {

    const [Contador, setContador] = useState(props.initial)

    const operar = (operador) => {
        if(operador === '+'){
            if(Contador < props.stock){
                setContador(Contador + 1)
            } else{
                setContador(props.stock)
            }
        } else if(operador === '-'){
            if(Contador === 1){
                setContador(1)
            } else {
                setContador(Contador - 1)
            }
        }
    }

    return(
        <div className='col-12 col-lg-3 align row'>
            <div className="cantidad col-10 col-lg-12 align">
                <button id='menos' className='masMenos align' onClick={() => operar('-')}>-</button>
                <input type='text' className='valor' value={Contador} />
                <button id='mas' className='masMenos align' onClick={() => operar('+')} >+</button>
            </div>
            <button className="agregar col-10 col-lg-12" onClick={() => { if(props.stock >= 1){setContador('Hay Stock y agregaste ' + {Contador}.Contador + ' :)')} else {setContador('No hay stock :(')} }}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;