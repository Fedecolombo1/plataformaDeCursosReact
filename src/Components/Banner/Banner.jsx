import Foto from '../../images/gif.gif'
import "./Banner.css";

function Banner() {

  return (
    <>
        <div className="col-12 row banner desk align">
            <div className='col-12 col-lg-6 row'>
              <h1 className='Titulo col-12'> Espacio de formacion</h1>
              <h3 className='subTitulo2 col-12'> Orientado a <span className='dos'></span></h3>
            </div>
            <img src={Foto} alt='gif' className="col-12 col-lg-3 foto" />
        </div>

        <div className="col-12 row banner mobile align">
            <div className="col-12 align" style={{justifyContent: 'flex-start', display:'flex'}}>
              <img src={Foto} alt='gif' className="foto" />
            </div>
            <div className='col-12 row'>
              <h1 className='Titulo col-12'> Espacio de formacion</h1>
              <h3 className='subTitulo1 col-12'> Orientado a <span className='uno'></span></h3>
            </div>
            <a className="col-12" style={{justifyContent: 'flex-start', display:'flex', textDecoration:'none'}} href="https://fedecolombo1.github.io/Home/">
              <button  className="col-4 botonC">Saber Mas</button>
            </a>
        </div>
    </>
  );

  
}

export default Banner;
