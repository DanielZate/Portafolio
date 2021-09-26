import './header.css'
import foto from './FotoSena030.jpg';

function Header(){
    return(
        <header>
            <div>

<nav class="nav1">
    <img src={foto} class="img1"/>
    <br/>
    <h1>Daniel Steven</h1>
    <h1>Alzate Hernandez</h1>
    <br/>
</nav>
</div>
        </header>
    )
}

export default Header;