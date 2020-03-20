import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import TodoReducer from './todo/TodoReducer'

const RootReducer = combineReducers({
    form: formReducer,
    todo: TodoReducer
})

export default RootReducer