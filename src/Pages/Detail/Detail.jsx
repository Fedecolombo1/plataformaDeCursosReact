import "./Detail.css";
import ItemDetailContainer from '../../Components/ItemDetailContainer/ItemDetailContainer'



function Home() {

  return (
    <div className="contariner-fluid">
      <div className="row align" style={{width:'100%', margin:'0', marginBottom:'68px'}}>
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default Home;