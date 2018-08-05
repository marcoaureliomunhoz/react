import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './app/App.css';
import Rotas from './app/Rotas';
import reducers from './app/Reducers' //<<== aqui fica o estado da aplicação

ReactDOM.render(
    <Provider store={applyMiddleware(thunk, multi, promise)(createStore)(reducers)}>
        <HashRouter>
            <Rotas />
        </HashRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
