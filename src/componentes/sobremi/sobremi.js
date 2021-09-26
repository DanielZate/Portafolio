import './sobremi.css';
import java from './java.png';
import php from './php.png';
import bd from './BD.png';
import css from './css.png';
import html from './html.png';
import js from './js.png';
import A from './linea.png';


function SobreMi(){
    return(
        <div className="contacto">
            <br/>
            <br/>

            <h2>CONTACTO</h2> 
            <img src={A} class="img3"/>
            <div className="info"><i class="fas fa-phone"></i> 315 3774453</div>
            <br/>
            <div className="info"><i class="fas fa-envelope"></i> Banilineen@gmail.com</div>
            <br />
            <div className="info"><i class="fas fa-map-marker-alt"></i> Bogota D.C</div>
            <br/>

            <h2>PERFIL</h2>
            <img src={A} class="img3"/>
                <p>Soy un joven que busca poder ayudar a las personas en su vida diaria con 
                    ayuda de la programación, llevó estudiando sobre la programación desde 
                    que estaba en el colegio, soy una persona que no se rinde fácil mente y
                    que buscar hallar una solución siempre.</p>

        
            <h2>HABILIDADES</h2>
            <img src={A} class="img3"/>
<div className="Habilidad">
            <h3>JAVA</h3>
            <img src={java} class="img2"/>
            <h3>PHP</h3>
            <img src={php} class="img2"/>
            <h3>BASE DE DATOS</h3>
            <img src={bd} class="img2"/>
            <h3>JAVASCRIPT</h3>
            <img src={js} class="img2"/>
            <h3>HTML</h3>
            <img src={html} class="img2"/>
            <h3>CSS</h3>
            <img src={css} class="img2"/>
            </div>
        </div>
    )
}

export default SobreMi