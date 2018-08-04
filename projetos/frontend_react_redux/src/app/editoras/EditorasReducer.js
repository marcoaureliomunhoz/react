import Editora from '../../models/Editora'

const INITIAL_STATE = {
    lista: [],
    cadastro: new Editora()
}

export default function (state = INITIAL_STATE, action) {
    if (action.type === 'LISTA_EDITORAS') {
        return { ...state, lista: action.payload }
    } else if (action.type === 'DEF_CADASTRO') {
        var cadastro = { ...state.cadastro }
        cadastro[action.name] = action.payload;
        //console.log(cadastro)
        return { ...state, cadastro: cadastro }
    } else if (action.type === 'INI_CADASTRO') {
        //console.log('INI_CADASTRO payload: ', action.payload)
        return { ...state, cadastro: action.payload || INITIAL_STATE.cadastro }
    }
    return state
}