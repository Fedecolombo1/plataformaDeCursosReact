import './ItemListContainer.css'
import ItemCount from './ItemCount/ItemCount'
import ItemList from './ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    

    return(
        <>
            <span className='col-10 tituloSecSpan'><h1 className='col-12 align TituloSec'>{greeting}</h1></span>
            <ItemList />
            <div className="col-12 align">
                <ItemCount initial={1} stock={5} />
            </div>
        </>
    )
}

export default ItemListContainer;