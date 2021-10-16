import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import AppRoutes from './app/Routes'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './app/reducers/rootReducer'
import thunk from 'redux-thunk'
import { ServiceLocator, Lookup, DecouplerProvider } from 'react-decoupler'
import { FakeHttpService } from './app/services/FakeHttpService'
import { PixService } from './app/services/PixService'
//import { HttpService } from './app/services/HttpService'

const locator = new ServiceLocator()
locator.register('HttpService', FakeHttpService)
//locator.register('HttpService', HttpService)
locator.register('PixService', PixService, {
 withParams: [Lookup('HttpService')]
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <DecouplerProvider locator={locator}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </DecouplerProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
