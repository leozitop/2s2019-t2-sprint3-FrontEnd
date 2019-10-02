import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LogarCep from './pages/Home/App';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Switch>
                {/* passa o componente que vai se renderizado */}
                <Route exact path='/' component={App} />
                <RotaPrivada path='/enderecos' component={Categoria} />
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(<LogarCep />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
