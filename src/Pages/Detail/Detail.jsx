import "./Detail.css";
import Page from '../../Components/Page/Page'
import ItemDetailContainer from '../../Components/ItemDetailContainer/ItemDetailContainer'



function Home() {

  return (
    <Page>
      <div className="contariner-fluid">
        <div className="row align" style={{width:'100%', margin:'0'}}>
          <ItemDetailContainer />
        </div>
      </div>
    </Page>
  );
}

export default Home;