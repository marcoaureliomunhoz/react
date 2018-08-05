import axios from 'axios'
import { reset as resetForm, initialize} from 'redux-form'
import Editora from '../../models/Editora'

const BASE_URL = 'http://localhost:9000/api'

export function getLista() {
    return (dispatch) => {
        axios.get(`${BASE_URL}/editoras`)
            .then(resp => {
                dispatch({
                    type: 'LISTA_EDITORAS',
                    payload: resp.data
                })
            })
    }
}

export function salvarEditora(editora) {
    console.log('salvarEditora: ', editora)
    if (editora.Id) {
        return dispatch => {
            axios.put(`${BASE_URL}/editora/${editora.Id}`, editora)
                .then(resp => {
                    console.log('ok! => ',resp.data)
                })
                .catch(resp => {
                    console.log('erro!') 
                })
        }
    } else {
        return dispatch => {
            axios.post(`${BASE_URL}/editora`, editora)
                .then(resp => {
                    console.log('ok! => ',resp.data)
                    dispatch(iniCadastro())
                })
                .catch(resp => {
                    console.log('erro!') 
                })
        }
    }
}

export function iniCadastro(id) {
    console.log('iniCadastro: ', id)
    if (id) {
        return dispatch => {
            axios.get(`${BASE_URL}/editora/${id}`)
                .then(resp => {
                    //console.log('iniCadastro dispatch => ', resp.data)
                    dispatch(initialize('CadEditoraForm',resp.data))
                })
        }
    } else {
        //console.log('iniCadastro initialize new Editora()')
        return initialize('CadEditoraForm',new Editora())
    }
}

