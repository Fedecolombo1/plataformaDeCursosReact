import "./ItemDetail.css";
import { React, useEffect, useState, useContext } from "react";
import { CartContext } from "../../../Context/cartContext";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../Firebase/firebase";

import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { data } from "flickity";

const ItemDetail = () => {
  const [Item, setItem] = useState(undefined);

  const { id } = useParams();

  const { addItem, saludo } = useContext(CartContext);

  useEffect(() => {

    const db = dataBase;
    const itemCollection = db.collection("products");
    const itemDetail = itemCollection.doc(id)

    itemDetail.get().then((doc) => {
        if(doc.size === 0){
            console.log('no results!');
        }else{
          setItem({id: doc.id, ...doc.data()});
        }
    }).catch((error) => {
        console.log('Error searching items', error);
    }).finally(() => {

    })
    
  }, [id, Item]);

  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} ${Item.title} al carrito`);
    console.log(quantity);
    console.log(Item);
    addItem(Item, quantity);
    console.log(saludo);
  };

  return (
    <>
      {Item ? (
        <div className="detailDiv col-12 col-lg-10 row align">
          <div className="bannerProd col-12 col-lg-12"></div>
          <h1 className="tituloProd col-11">
            <span className="cursoDe"> Curso online de </span> {Item.title}
          </h1>
          <iframe
            className="col-12 col-lg-4"
            height="345"
            src="https://www.youtube.com/embed/ThiCMd5kGbE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
          <div className="col-12 col-lg-8 row align descProd">
            <h3 className="subtitleProd">Acerca del curso</h3>
            <p className="descripcion col-12">{Item.description}</p>
            <div className="col-12 row align precioYbtn">
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
              <button className="col-6 inscribirse">
                Inscribirse{" "}
                <FontAwesomeIcon
                  style={{ fontWeight: "400", marginLeft: "5px" }}
                  icon={faArrowRight}
                />
              </button>
            </div>
          </div>
          <div className="col-12 align">
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          </div>
        </div>
      ) : (
        <div className="detailDiv col-12 col-lg-10 row align">CARGANDO</div>
      )}
    </>
  );
};

export default ItemDetail;
