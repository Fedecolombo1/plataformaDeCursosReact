import "./ItemDetail.css";
import { React, useEffect, useState, useContext } from "react";
import { CartContext } from "../../../Context/cartContext";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../Firebase/firebase";
import { NavLink } from "react-router-dom";

import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";
import Spinner from '../../Spinner/Spinner'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const ItemDetail = () => {
  const [Item, setItem] = useState(undefined);
  const [ItemNoExistente, setItemNoExistente] = useState(undefined);

  const { id } = useParams();

  const { addItem } = useContext(CartContext);

  useEffect(() => {

    const db = dataBase;
    const itemCollection = db.collection("products");
    const itemDetail = itemCollection.doc(id)

    itemDetail.get().then((doc) => {
        if(doc.size === 0 || undefined){
            console.log('no results!');
        }else{
          setItem({id: doc.id, ...doc.data()});
        }
    }).catch((error) => {
        console.log('Error searching items', error);
        setItemNoExistente(true)
    }).finally(() => {

    })

    
    
  }, [id, Item]);

  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} ${Item.title} al carrito`);
    console.log(quantity);
    console.log(Item);
    addItem(Item, quantity);
  };

  return (
    <>
      {Item ? (
        <Fragment>
          { Item.title === undefined ? 
          <Fragment>
            <div className="noExisteBox align row">
              <p className="noExiste">El producto que buscas no existe 😞</p>
              <NavLink to='/' className='btnVolverHome col-12 align'>
                      Volver al home
              </NavLink>
            </div> 
          </Fragment>
          : (
          <div className="detailDiv col-12 col-lg-12 row align">
            <div className="bannerProd col-12 col-lg-10 align">
              <h1 className="tituloProd col-7">
                <span className="cursoDe"> Curso online de </span> {Item.title}
              </h1>
            </div>
            <div className="col-12 col-lg-9 row align descProd">
              <h3 className="subtitleProd">Acerca del curso</h3>
              <iframe
                className="col-12 col-lg-4"
                height="345"
                src="https://www.youtube-nocookie.com/embed/71_NkXgAK1g?controls=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="col-12 col-lg-6 align row descycont">
                <div className="col-12 col-lg-8 row align precioYbtn">
                  <p className="precioProd col-6">
                    <FontAwesomeIcon
                      style={{ fontWeight: "400" }}
                      icon={faDollarSign}
                      className="iconoDesc"
                    />
                    {Item.price}
                  </p>
                  <p className="precioProd col-6">
                    <FontAwesomeIcon
                      style={{ fontWeight: "400" }}
                      icon={faClock}
                      className="iconoDesc"
                    />
                    {Item.duration}
                  </p>
                  <p className="precioProd col-12">
                    <FontAwesomeIcon
                      style={{ fontWeight: "400" }}
                      icon={faCalendar}
                      className="iconoDesc"
                    />
                    Clases sincronicas y material complementario
                  </p>
                </div>
                <div className="col-12 align">
                  <p className="descripcion col-12 col-lg-7">{Item.description}</p>
                </div>
                <div className="col-12 align count">
                  <ItemCount initial={1} stock={5} onAdd={onAdd} col={5}/>
                </div>
              </div>
            </div>
          </div>
           ) }
        </Fragment>
      ) : (
        <Spinner/>
      )}
    </>
  );
};

export default ItemDetail;
