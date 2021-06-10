import "./NavBar.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown'
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {

  return (
    <>
      <header className="navbar col-12 desk">
        <a className="col-2" href="https://fedecolombo1.github.io/Home/"><h1 className="col-12 nombre">-LOGO</h1></a>
        <div className="col-6 row align">
            <Dropdown menualign="center" className="col-2 align links">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Cursos <FontAwesomeIcon style={{marginLeft:'5px',fontSize:'15px'}} icon={faChevronDown} />
              </Dropdown.Toggle>

              <Dropdown.Menu id='dropdown-menu'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown menualign="center" className="col-2 align links">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Recursos <FontAwesomeIcon style={{marginLeft:'5px',fontSize:'15px'}} icon={faChevronDown} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h2 className="col-2 align links"><a className="navLinks" href="#contacto"> Formacion</a></h2>
            <h2 className="col-2 align links"><a className="navLinks" href="#estudios1"> Nosotros</a></h2>
            <h2 className="col-2 align links"><a className="navLinks" href="#estudios1"> Contacto</a></h2>
        </div>
        <a className="col-2" style={{justifyContent: 'flex-end', display:'flex', textDecoration:'none'}} href="https://fedecolombo1.github.io/Home/"><button style={{marginRight:'6%'}} className="col-6 botonC">Ver Cursos</button></a>
        
      </header>

      <header className="row col-12 align mobile">
        <nav className="col-6 row align navbar">
          <div className="menu-mobile col-12">
            <button id="bt-menu-mobile">
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </button>
            <div className="clear"></div>
          </div>
        </nav>

        <a className="col-6 row align logo" href="https://fedecolombo1.github.io/Home/">
          <h1 className="col-12 nombre">-LOGO</h1>
        </a>
      </header>
    </>
  );

  
}

export default NavBar;
