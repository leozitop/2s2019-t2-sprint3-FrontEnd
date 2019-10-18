import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './pages/Home/App';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Lancamentos from './pages/Lancamentos/Lancamentos';
import TelaAdm from './pages/TelaAdm/TelaAdm';
import TelaAdm_User from './pages/TelaAdm_User/TelaAdm_User';

import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Switch>
                {/* passa o componente que vai se renderizado */}
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/lancamentos' component={Lancamentos}/>
                <Route path='/telaAdm' component={TelaAdm}/>
                <Route path='/telaAdmUser' component={TelaAdm_User}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
