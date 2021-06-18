import { React, useEffect, useState } from 'react';
import './Item.css'


const Item = () => {

    const [Item, setItem] = useState({id:1,price:'Cargando curso..'})

    useEffect(() => {
        const itemsDelay = new Promise((resolve, reject) => {
            resolve({id:1,title:'Disenio Ux/Ui',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?',price:2000,pictureUrl:'https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png'})
        }).then((result) => {
            setTimeout(() => {
                setItem(result)
            }, 2000)
        })
    }, [])

    return(
        <>
           <div className="product col-10 col-lg-2 row align">
                <img className='col-12' src={Item.pictureUrl} alt='imgCurso'/>
                <div className="col-12 textProduct row">
                    <h1 className="col-12 titleP">{Item.title}</h1>
                    <p className="col-12 subtitleP">{Item.description}</p>
                    <p className="col-12 priceP">${Item.price}</p>
                </div>
                <a className="col-12 align" style={{textDecoration:'none'}} href="https://fedecolombo1.github.io/Home/"><button className="col-6 botonS">Ver Curso</button></a>
           </div>
        </>
    )
}

export default Item;