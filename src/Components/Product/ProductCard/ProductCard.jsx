import './ProductCard.css'

const ProductCard = () => {
    return(
        <>
           <div className="product col-10 col-lg-2 row align">
                <img src='https://aspectgroup.com.au/wp-content/themes/aspect/library/images/img-top-why.png' alt='fotoP'/>
                <div className="textProduct row">
                    <h1 className="col-12 titleP">Disenio UX/UI</h1>
                    <p className="subtitleP">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?</p>
                    <a className="col-12 align" style={{textDecoration:'none'}} href="https://fedecolombo1.github.io/Home/"><button className="col-6 botonS">Ver Curso</button></a>
                </div>
           </div>
        </>
    )
}

export default ProductCard;