import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './main/App';
import rootReducer from './_reducers/RootReducer'

const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
