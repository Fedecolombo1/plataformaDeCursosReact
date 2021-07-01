import "./ItemDetail.css";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemCount from '../../ItemListContainer/ItemCount/ItemCount'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



const ItemDetail = () => {
  const [Item, setItem] = useState(undefined);

  let {id} = useParams()

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

    const productos = [
      {id:1,title:'Disenio Ux/Ui',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png',categoryId:'cursos'},
      {id:2,title:'Psicologia',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png',categoryId:'cursos'},
      {id:3,title:'Material x',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png',categoryId:'recursos'},
      {id:4,title:'Recurso Esi',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png',categoryId:'recursos'},
    ]

    const getItem = async () => {
      const result = productos.filter(producto => producto.id == id);
      await setItem(result);
      // console.log(Item);
    };
    setTimeout(() => {
      getItem();
    }, 2000);
    }, [id, Item]);

  return (
    <>
      { Item ? (
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
              <ItemCount initial={1} stock={5} />
          </div>
        </div>
        )
        :
        (
        <div className="detailDiv col-12 col-lg-10 row align">
          CARGANDO
        </div>
        )
      }
      
    </>
  );
};

export default ItemDetail;
