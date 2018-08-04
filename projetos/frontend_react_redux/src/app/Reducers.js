import { combineReducers } from 'redux'

import EditorasReducer from './editoras/EditorasReducer'

const RootReducer = combineReducers({
    editoras: EditorasReducer
})

export default RootReducer