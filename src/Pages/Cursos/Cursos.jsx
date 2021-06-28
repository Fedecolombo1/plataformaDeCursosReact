import "./Cursos.css";
import Page from '../../Components/Page/Page'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'



function Home() {

  return (
    <Page>
      <div className="contariner-fluid">
        <div className="row align" style={{width:'100%', margin:'0', marginBottom:'68px'}}>
          <ItemListContainer />
        </div>
      </div>
    </Page>
  );
}

export default Home;