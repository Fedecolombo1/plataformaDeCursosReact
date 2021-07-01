import "./Home.css";
import "../../Components/NavBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core'
import Page from '../../Components/Page/Page'
import Banner from '../../Components/Banner/Banner'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import BtnFixed from '../../Components/BtnFixed/BtnFixed'



function Home() {

  return (
    <Page>
      <div className="contariner-fluid">
        <div className="row align" style={{width:'100%', margin:'0', marginBottom:'68px'}}>
          <BtnFixed />
          <Banner />
          <ItemListContainer greeting='Nuestros Ultimos Cursos y recursos' />
        </div>
      </div>
    </Page>
  );
}

export default Home;
