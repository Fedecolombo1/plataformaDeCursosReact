import "./ItemDetail.css";
import { React, useEffect, useState } from "react";
import videoUrl from "../../../images/vidImg.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = () => {
  const [Item, setItem] = useState({ id: 1, price: "Cargando curso.." });

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      resolve({
        id: 1,
        title: "Curso online de psicoanalisis temprano",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate consequatur laboriosam, officia exercitationem quod, nulla earum molestias laborum nesciunt porro. Unde fugit sapiente eos vero. Quos vitae similique hic?",
        price: 2500,
        pictureUrl: "",
        videoUrl: videoUrl,
      });
    }).then((result) => {
      setTimeout(() => {
        setItem(result);
      }, 2000);
    });
    getItems.then();
  }, []);

  return (
    <>
      <div className="detailDiv col-12 col-lg-10 row align">
        <div className="bannerP col-12"></div>
        <h1 className="tituloP col-11">{Item.title}</h1>
        <img src={Item.videoUrl} alt="" className="col-12" />
        <p className="descripcion col-12">
          {Item.description}
        </p>
        <h3 className="duracion">
          Duracion de dos semanas con clases sincronicas y material
          complementario
        </h3>
        <div className="col-12 row align precioYbtn">
          <p className="precio col-6">
            <FontAwesomeIcon
              style={{ fontWeight: "400" }}
              icon={faDollarSign}
            />{" "}
            {Item.price}
          </p>
          <button className="col-6 inscribirse">Inscribirse</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
