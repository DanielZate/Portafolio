import './textos.css'
import A from './linea.png';
import E from './esp.png';
import I from './ing.png';

import {

    Link
  } from "react-router-dom";
  
function Textos(){
    return(
<div className="general">
            <div className="Estudios">
<br/>
<br/>
        <center><h2>ESTUDIOS</h2>
        <img src={A} class="img3"/></center>
        <p>Diciembre 2020 | Bogota</p>
        <p>TÉCNICO PROGRAMACIÓN DE SOFTWARE</p>
        <p>SENA</p>

           <br/> 
        <p>Diciembre 2021 | Bogota</p>
        <p>TECNÓLOGO DE ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN </p>
        <p>SENA</p>
        <p></p>

        <p><Link to="/certificados">Certificados</Link></p>


        <br/>
        <center><h2>IDIOMAS</h2>
        <img src={A} class="img3"/></center>

        <p>Español</p>
        <img src={E} class="img"/>
        <br/>
        <p>Ingles</p>
        <img src={I} class="img"/>
        <br/><br/><br/><br/>
        <center><h2>EXPERIENCIA LABORAL</h2>
        <img src={A} class="img3"/></center>
        <p>Sin experiencia laboral</p>
        <br/><br/><br/>
        <center><h2>HABILIDADES / DEBILIDADES</h2>
        <img src={A} class="img3"/></center>
        <br/>
        <a><Link to="/fortaleza">Ver mas</Link></a>


</div>
</div>
    )
}

export default Textos;