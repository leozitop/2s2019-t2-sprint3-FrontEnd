import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// componente
import App from './pages/Home/App';
import Categoria from './pages/Categoria/Categoria';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';
import Login from './pages/Login/Login';
import Eventos from './pages/Eventos/Eventos';

import * as serviceWorker from './serviceWorker';

// rotas
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

const RotaPrivada = ({component: Component}) =>(
    <Route
        render={props =>
            localStorage.getItem("usuario-gufos") !== null ? 
                // se for diferente de nulo ele vai pra categorias
                <Component {...props} />
            : 
                <Redirect
                // caminho a ser redirecionado. Caso valor nulo ele volta pro login
                    to={{ pathname: "/login", 
                    state: {from: props.location} }} 
                />
        }
    >
    </Route>
)

const routing = (
    <Router>
        <div>
            <Switch>
                {/* passa o componente que vai se renderizado */}
                <Route exact path='/' component={App} />
                <RotaPrivada path='/categoria' component={Categoria} />
                <RotaPrivada path='/eventos' component={Eventos} />
                <Route path='/login' component={Login}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
)

// renderiza o componente na div root
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
