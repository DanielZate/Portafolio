
import './App.css';
import Header from './componentes/header/header';
import SobreMi from './componentes/sobremi/sobremi';
import Textos from './componentes/textos/textos';
import Forlazas from './pages/fortalezas/fortalezas';
import Error from './pages/error404/error404';
import Certicado from './pages/certificados/certificados';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  
  <div className="general">
    <Router>
      <Switch>
      <Route exact path="/">
      <Header/>
   <Textos/>    
    <SobreMi/>
        </Route>
        <Route path="/fortaleza">
            <Forlazas/>
        </Route>
        <Route path="/certificados">
            <Certicado/>
        </Route>
        <Route path="*">
            <Error/>
        </Route>
      </Switch>
    </Router>
    

    

  </div>
  );
}

export default App;
