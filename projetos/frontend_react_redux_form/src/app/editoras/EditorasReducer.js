const INITIAL_STATE = {
    lista: []
}

export default function (state = INITIAL_STATE, action) {
    console.log('EditorasReducer: ',action.type)
    if (action.type === 'LISTA_EDITORAS') {
        return { ...state, lista: action.payload }
    }
    return state
}