import "./Home.css";
import "../../Components/NavBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core'
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import BtnFixed from '../../Components/BtnFixed/BtnFixed'
import ItemDetailContainer from '../../Components/ItemDetailContainer/ItemDetailContainer'



function Home() {

  return (
    <div className="contariner-fluid">
      <div className="row align" style={{width:'100%', margin:'0', marginBottom:'68px'}}>
        <BtnFixed />
        <NavBar />
        <Banner />
        <ItemListContainer greeting='Nuestros Ultimos Cursos' />
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default Home;
