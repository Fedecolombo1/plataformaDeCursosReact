import { React, useEffect, useState } from "react";
import "./Item.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { dataBase } from "../../../../Firebase/firebase";

const Item = () => {
  const [Items, setItems] = useState(undefined);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = dataBase;
    const itemCollection = db.collection("products");

    if (categoryId) {
      const itemCollectionCategory = itemCollection.where(
        "categoryId",
        "==",
        categoryId
      );
      itemCollectionCategory
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("no results!");
          } else {
            setItems(
              querySnapshot.docs.map((doc) => [{ id: doc.id, ...doc.data() }])
            );
          }
        })
        .catch((error) => {
          console.log("Error searching items", error);
        })
        .finally(() => {});
    } else {
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("no results!");
          } else {
            setItems(
              querySnapshot.docs.map((doc) => [{ id: doc.id, ...doc.data() }])
            );
          }
        })
        .catch((error) => {
          console.log("Error searching items", error);
        })
        .finally(() => {});
    }
  }, []);

  return (
    <>
      {console.log(Items)}
      {Items ? (
        <div className="itemBox row align">
          { categoryId ? (<div className="col-12 align"><h1 className='col-12 col-lg-10'>Nuestros {categoryId}</h1></div>) : null }
          {Items.map((item) => (
            <div className="product col-11 col-lg-4 col-xl-2 col-md-4 row align" key={item[0].id}>
              <img className="col-12" src={item[0].pictureUrl} alt="imgCurso" />
              <div className="col-12 textProduct row">
                <h1 className="col-12 titleP">{item[0].title}</h1>
                <p className="col-12 subtitleP">{item[0].description}</p>
                <p className="col-12 priceP">${item[0].price}</p>
              </div>
              <NavLink
                activeClassName="activeNav"
                className="col-12 align"
                style={{ textDecoration: "none" }}
                to={`/${item[0].categoryId}/${item[0].id}`}
              >
                <button className="col-6 botonS">Ver Curso</button>
              </NavLink>
            </div>
          ))}
        </div>
      ) : (
        <div className="itemBox row align">
            { categoryId ? (<h1>Nuestros {categoryId}</h1>) : null }
            <div className="product col-10 col-lg-2 row align"></div>
            <div className="product col-10 col-lg-2 row align"></div>
        </div>
      )}
    </>
  );
};

export default Item;
