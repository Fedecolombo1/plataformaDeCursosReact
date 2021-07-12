import { React, useEffect, useState } from 'react';
import './Item.css'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { dataBase } from '../../../../Firebase/firebase'


const Item = () => {

    const [Items, setItems] = useState(undefined)
    const {categoryId} = useParams()

    

    useEffect(() => {
        /*const productos = [
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
                console.log(result);
            } else {
                result = result
            }
            setTimeout(() => {
                setItems(result)
            }, 2000)
        })
        itemsDelay.then() */

        const db = dataBase
        const itemCollection = db.collection('products')
        
        if(categoryId){
            const itemCollectionCategory = itemCollection.where('categoryId', '==', categoryId)
            itemCollectionCategory.get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('no results!');
                }else{
                    setItems(querySnapshot.docs.map(doc => [{id: doc.id, ...doc.data()}]));
                }
            }).catch((error) => {
                console.log('Error searching items', error);
            }).finally(() => {
    
            })
        } else {
            itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('no results!');
                }else{
                    setItems(querySnapshot.docs.map(doc => [{id: doc.id, ...doc.data()}]));
                }
            }).catch((error) => {
                console.log('Error searching items', error);
            }).finally(() => {
    
            })
        }

        
    }, [])

    

    return(
        <>
        {console.log(Items)}
        { Items ? (
            Items.map(item => 
                <div className="product col-10 col-lg-2 row align">
                    <img className='col-12' src={item[0].pictureUrl} alt='imgCurso'/>
                    <div className="col-12 textProduct row">
                        <h1 className="col-12 titleP">{item[0].title}</h1>
                        <p className="col-12 subtitleP">{item[0].description}</p>
                        <p className="col-12 priceP">${item[0].price}</p>
                    </div>
                    <NavLink activeClassName='activeNav' className='col-12 align' style={{textDecoration:'none'}}  to={`/${item[0].categoryId}/${item[0].id}`}>
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