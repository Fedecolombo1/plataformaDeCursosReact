import './ItemListContainer.css'
import ItemList from './ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    

    return(
        <>
            <h1 className='col-10 TituloSec'>{greeting}</h1>
            <ItemList />
        </>
    )
}

export default ItemListContainer;