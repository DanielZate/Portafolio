import './fortalezas.css'
import A from './linea.png';
import {

    Link
  } from "react-router-dom";
function fortalezas() {
    return (
<div>
<Link to="/Inicio">  <button className="button1" > Volver </button></Link>
<br/>
<center><h2>FORTALEZAS / DEBILIDADES</h2>
        <img src={A} class="img3"/></center>

        <nav class="text2" >
		<br/>
		<table >
			<thead>
			 	<tr>
			 		<th>Fortaleza</th>			
			 <th>Debilidades</th>
 			
 				</tr>
 			</thead>

 			<tbody>
 				<tr>
 					<td >* Soy una persona que no se da por vencido tan fácilmente</td>
 					<td >* Soy alguien que no tiene mucha paciencia </td>
 				</tr>
 				<tr>
 					<td>* Siempre intento buscar una solución a cualquier problema </td>
 					<td>* No tengo mucha seguridad en mí mismo </td>
 				</tr>
 				 <tr>
 					<td>* Tengo responsabilidad en mis trabajos y proyectos </td>
 					<td>* Soy mal líder, no puedo guiar a una suma grande de personas </td>
 				</tr>
 				<tr>
 					<td>* Soy muy abierto a nuevos temas, aprendiendo muy fácilmente </td>
 					<td>* No tengo mucha experiencia laboral </td>
 				</tr>
 			</tbody>


		</table>

	</nav>
</div>
    );
  }

  

export default fortalezas