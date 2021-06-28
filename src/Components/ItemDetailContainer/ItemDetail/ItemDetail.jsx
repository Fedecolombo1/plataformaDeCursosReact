import "./ItemDetail.css";
import { React, useEffect, useState } from "react";
import videoUrl from "../../../images/vidImg.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = () => {
  const [Item, setItem] = useState({ id: 1, price: "Cargando curso.." });

  useEffect(() => {
    // const getItems = new Promise((resolve, reject) => {
    //   resolve({
    //    id: 1,
    //    title: "Psicoanalisis Temprano",
    //    description:
    //      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate consequatur laboriosam, officia exercitationem quod, nulla earum molestias laborum //nesciunt porro. Unde fugit sapiente eos vero. Quos vitae similique hic?",
    //    price: 2500,
    //    duration: "2 Semanas",
    //    pictureUrl: "",
    //    videoUrl: videoUrl,
    //  });
    //}).then((result) => {
    //  setTimeout(() => {
    //    setItem(result);
    //  }, 2000);
    //});
    //getItems.then();

    const getItem = async () => {
      const result = {
        id: 1,
        title: "Psicoanalisis Temprano",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate consequatur laboriosam, officia exercitationem quod, nulla earum molestias laborum nesciunt porro. Unde fugit sapiente eos vero. Quos vitae similique hic?",
        price: 2500,
        duration: "2 Semanas",
        pictureUrl: "",
        videoUrl: videoUrl,
      };

      await setItem(result);
    };
    setTimeout(() => {
      getItem();
    }, 2000);
  }, []);

  return (
    <>
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
      </div>
    </>
  );
};

export default ItemDetail;
