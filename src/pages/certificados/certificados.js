import './certificados.css'
import A from './linea.png';
import {

    Link
  } from "react-router-dom";
  

function certificados() {
    return (
<div>
<Link to="/Portafolio">  <button className="button1" > Volver </button></Link>

<center><h2>CERTIFICADOS</h2>
        <img src={A} class="img3"/></center>

        <ul>	
<br/>
	<li><p class="text">Desarrollo de habilidades digitales para la gestión de la información</p></li>
	<li><p class="text">Pensamiento computacional</p></li>
	<li><p class="text">Desarrollos web y de aplicaciones móviles en entornos front-end</p></li>
	<li><p class="text">Aplicación de metodologías devops para el desarrollo de software</p></li>
    <li><p class="text">Cloud computing</p></li>
    <li><p class="text">Aplicación de inteligencia artificial y ciencias de datos con python en modelos predictivos</p></li>
    <li><p class="text">Aplicación de la ciberseguridad en el desarrollo de aplicaciones web</p></li>
    <li><p class="text">Blockchain</p></li>
    <li><p class="text">Diseño de bases de datos para la nube</p></li>
    <li><p class="text">Humanismo digital</p></li>
</ul>
</div>
    );
  }

  

export default certificados