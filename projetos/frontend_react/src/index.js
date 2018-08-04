import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './app/App.css';
import Rotas from './app/Rotas';

ReactDOM.render(
    <HashRouter>
        <Rotas />
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();
