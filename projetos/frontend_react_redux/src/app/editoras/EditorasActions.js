import axios from 'axios'

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

export function defCadastro(event) {
    //console.log(event.target.name)
    return {
        type: 'DEF_CADASTRO', 
        payload: event.target.value,
        name: event.target.name
    }
}

export function salvarEditora(editora) {
    //console.log('editora.id: ', editora.id)
    if (editora.id) {
        return dispatch => {
            axios.put(`${BASE_URL}/editora/${editora.id}`, editora)
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
    //console.log('iniCadastro: ', id)
    if (id) {
        return (dispatch) => {
            axios.get(`${BASE_URL}/editora/${id}`)
                .then(resp => {
                    dispatch({
                        type: 'INI_CADASTRO',
                        payload: resp.data
                    })
                })
        }
    }
    return {
        type: 'INI_CADASTRO'
    }
}