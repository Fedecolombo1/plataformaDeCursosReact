import "./Carrito.css";
import Page from '../../Components/Page/Page'
import Cart from '../../Components/Cart/Cart'


function Carrito() {

  return (
    <Page>
      <div className="contariner-fluid">
        <div className="row align" style={{width:'100%', margin:'0', marginBottom:'68px'}}>
            <Cart />
        </div>
      </div>
    </Page>
  );
}

export default Carrito;