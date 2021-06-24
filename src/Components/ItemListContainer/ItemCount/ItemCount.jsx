import { React, useState } from 'react';
import './ItemCount.css'


const ItemCount = ({stock, initial}) => {

    const [Contador, setContador] = useState(initial)

    const operar = (operador) => {
        if(operador === '+' && Contador < stock){
            setContador(Contador + 1)
        } else if(operador === '-' && Contador < stock){
            setContador(Contador - 1)
        }
    }

    const onAdd = () => {
        if(stock > 1){
            setContador(`Agregaste ${Contador} unidades`)
        } else {
            setContador('No hay stock :(')
        }
    }

    return(
        <div className='col-12 col-lg-3 align row'>
            <div className="cantidad col-10 col-lg-12 align">
                <button id='menos' className='masMenos align' onClick={() => operar('-')}>-</button>
                <input type='text' className='valor' value={Contador} />
                <button id='mas' className='masMenos align' onClick={() => operar('+')} >+</button>
            </div>
            {(stock >= 1)
                ?
                <button className="agregar col-10 col-lg-12" onClick={() => onAdd()}>Agregar al carrito</button>
                :
                <button className="disabled col-10 col-lg-12" onClick={() => onAdd()}>No hay stock</button>
            }
        </div>
    )
}

export default ItemCount;