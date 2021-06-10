import "./App.css";
import "./Components/NavBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'



function App() {

  return (
    <div className="contariner-fluid">
      <div className="row align" style={{width:'100%', margin:'0'}}>
        <NavBar />
        <Banner />
      </div>
    </div>
  );
}

export default App;
