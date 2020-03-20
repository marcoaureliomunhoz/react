import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'

import { store } from './app/Store'
import Routes from './app/Routes'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Routes />
        </HashRouter>
    </Provider>
, document.getElementById('root'))

serviceWorker.unregister()
