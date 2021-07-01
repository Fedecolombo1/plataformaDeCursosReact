import { React, useEffect, useState } from 'react';
import './Item.css'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';


const Item = () => {

    const [Items, setItems] = useState(undefined)
    const {categoryId} = useParams()

    

    useEffect(() => {
        const productos = [
            {id:1,title:'Disenio Ux/Ui',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png',categoryId:'cursos'},
            {id:2,title:'Psicologia',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png',categoryId:'cursos'},
            {id:3,title:'Material x',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png',categoryId:'recursos'},
            {id:4,title:'Recurso Esi',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png',categoryId:'recursos'},
        ]

        const itemsDelay = new Promise((resolve, reject) => {
            resolve(productos)
        }).then((result) => {
            if(categoryId){
                result = result.filter(producto => producto.categoryId === categoryId);
            } else {
                result = result
            }
            setTimeout(() => {
                setItems(result)
            }, 2000)
        })
        itemsDelay.then()
    }, [])

    

    return(
        <>

        { Items ? (
            Items.map(item => 
                <div className="product col-10 col-lg-2 row align">
                    <img className='col-12' src={item.pictureUrl} alt='imgCurso'/>
                    <div className="col-12 textProduct row">
                        <h1 className="col-12 titleP">{item.title}</h1>
                        <p className="col-12 subtitleP">{item.description}</p>
                        <p className="col-12 priceP">${item.price}</p>
                    </div>
                    <NavLink activeClassName='activeNav' className='col-12 align' style={{textDecoration:'none'}}  to={'/cursos/' + item.id}>
                        <button className="col-6 botonS">Ver Curso</button>
                    </NavLink>
                </div>
            )
            )
            :
            (
                <div className="product col-10 col-lg-2 row align">
                </div>
            )
        }

        </>
    )
}

export default Item;