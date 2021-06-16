import './ItemListContainer.css'
import ProductCard from '../Product/ProductCard/ProductCard'
import ItemCount from '../Item/ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

    

    return(
        <>
            <span className='col-10 tituloSecSpan'><h1 className='col-12 align TituloSec'>{greeting}</h1></span>
            <ProductCard />
            <div className="col-12 align">
                <ItemCount initial={1} stock={5} />
            </div>
        </>
    )
}

export default ItemListContainer;