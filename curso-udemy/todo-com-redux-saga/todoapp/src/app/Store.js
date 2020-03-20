import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from './Reducers'
import rootSaga from './Sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(thunk, multi, promise, sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export { store }