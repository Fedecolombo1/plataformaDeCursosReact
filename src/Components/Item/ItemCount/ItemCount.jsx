import './ItemCount.css'


const ItemCount = () => {

    /*let contador = 0

    let menos = document.getElementById('menos')

    console.log(document.getElementById('menos') + 'HOLAAAA');

    let mas = document.getElementById('mas')

    let cantidadReal = document.getElementById('cantidadReal')

    menos.addEventListener(onclick, () => {
        return contador + 1
    })*/

    return(
        <div className='col-12 col-lg-3 align row'>
            <div className="cantidad col-10 col-lg-12 align">
                <button id='menos' className='masMenos align'>-</button>
                <span id='cantidadReal' className='cantidadReal'></span>
                <button id='mas' className='masMenos align'>+</button>
            </div>
            <button className="agregar col-10 col-lg-12">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;