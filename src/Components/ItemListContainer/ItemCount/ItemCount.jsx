import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [Contador, setContador] = useState(initial);
  const [estado, setEstado] = useState('');
  const [mostrar, setMostrar] = useState('');
  const [contadorFinal, setContadorFinal] = useState();

  const operar = (operador) => {
    if (operador === "+" && Contador < stock) {
      setContador(Contador + 1);
    } else if (operador === "-" && Contador <= stock && Contador !== 1) {
      setContador(Contador - 1);
    }
  };

  const handleAdd = async (event) => {
    if (stock > 0) {
      setEstado('none')
      setMostrar('mostrar')
      setContadorFinal(Contador)
      onAdd(Contador)
    } else {
      setContador("No hay stock :(");
    }
  };



  return (
    <div className="col-12 col-lg-3 align row">
      <div className={estado + " cantidad col-10 col-lg-12 align"}>
        <button
          id="menos"
          className="masMenos align"
          onClick={() => operar("-")}
        >
          -
        </button>
        <input type="text" className="valor" value={Contador} />
        <button id="mas" className="masMenos align" onClick={() => operar("+")}>
          +
        </button>
      </div>
      {stock >= 1 ? (
        <>
          <button className={estado + " agregar col-10 col-lg-12"} onClick={(e) => handleAdd(e)}>
            Agregar al carrito
          </button>
          <NavLink to='/cart' className={mostrar + " none agregar col-10 col-lg-12"} >
            Terminar compra
          </NavLink>
        </>
      ) : (
        <button className="disabled col-10 col-lg-12" onClick={() => onAdd()}>
          No hay stock
        </button>
      )}
    </div>
  );
};

export default ItemCount;
