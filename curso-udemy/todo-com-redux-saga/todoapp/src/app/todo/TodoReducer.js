import todoTypes from './TodoTypes'

const INITIAL_STATE = {
    list: [],
    lastSavedId: 0
}

export default function (state = INITIAL_STATE, action) {

    console.log('TodoReducer: ', action)

    // GENERAL
    if (action.type === todoTypes.NEW_TODO) {
        return { ...state, lastSavedId: 0 }
    }
    else

    // SAGA
    if (action.type === todoTypes.LIST_REQUEST_SAGA_SUCCESS) {
        return { ...state, list: action.payload, lastSavedId: 0 }
    }
    else
    if (action.type === todoTypes.SAVE_REQUEST_SAGA_SUCCESS) {
        return { ...state, lastSavedId: action.payload }
    }
    else

    // THUNK    
    if (action.type === todoTypes.LIST_REQUEST) {
        return { ...state, list: action.payload, lastSavedId: 0 }
    }
    else
    if (action.type === todoTypes.SAVE_REQUEST) {
        return { ...state, lastSavedId: action.payload }
    }

    return state;
}