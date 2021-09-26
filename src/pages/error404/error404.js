import './error404.css'
import error from './mensaje.jpg';

import {

    Link
  } from "react-router-dom";

function error404(){
    return(
<div>

        <center><img src={error} class="error"/>
         <i class="fas fa-arrow-left"></i> <Link to="/"><a className="" > Volver </a></Link></center>

    
</div>
    );
}

export default error404