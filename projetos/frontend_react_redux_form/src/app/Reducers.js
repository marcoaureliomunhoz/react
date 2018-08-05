import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import EditorasReducer from './editoras/EditorasReducer'

const RootReducer = combineReducers({
    editoras: EditorasReducer, 
    form: formReducer
})

export default RootReducer