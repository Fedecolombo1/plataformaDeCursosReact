import Foto from '../../images/gif.gif'
import "./Banner.css";

function Banner() {

  return (
    <>
        <div className="col-12 row banner align">
            <div className='col-12 col-lg-6 row'>
            <h1 className='Titulo col-12'> Espacio de formacion</h1>
            <h3 className='subTitulo col-12'> Orientado a profesionales de la salud</h3>
            </div>
            <img src={Foto} alt='gola' className="col-12 col-lg-6 foto" />
        </div>
    </>
  );

  
}

export default Banner;
