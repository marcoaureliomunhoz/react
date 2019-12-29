import { TodoConstants } from '../_constants/TodoConstants'

const INITIAL_STATE = {
    description: '',
    list: []
}

export default function(state = INITIAL_STATE, action) {
    console.log(action.type)
    switch (action.type) {
        case TodoConstants.TODO_DESCRIPTION_CHANGED:
            return { ...state, description: action.payload }
        case TodoConstants.TODO_CLEAR_FORM:
            return { ...state, description: '' }
        case TodoConstants.TODO_LISTED:
            return { ...state, list: action.payload, description: '' }
        default:
            return state
    }
}