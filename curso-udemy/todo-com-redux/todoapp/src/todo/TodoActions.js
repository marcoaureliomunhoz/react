import axios from 'axios'
import { TodoConstants } from '../_constants/TodoConstants'

const getItemsType = (resp) => ({
    type: TodoConstants.TODO_LISTED,
    payload: resp.data
})

// o middleware thunk nos oferece dois parametros, dispatch e getState
// ao usar o thunk com requisições assíncronas é preciso realizar o dispatch manual no retorno da requisição
// através de getState podemos acessar o estado da aplicação, o que facilita em alguns casos o acesso a dados
export const getItems = () => {
    return (dispatch, getState) => {
        // const description = getState().todo.description
        axios
            .get(TodoConstants.API_URL)
            .then(resp => dispatch(getItemsType(resp)))
    }
}

// qdo retornamos uma promise quem atua é o middleware promise
// neste caso no reducer recebemos no payload a própria promise
// export const getItems = () => {
//     const resp = axios.get(TodoConstants.API_URL)
//     return {
//         type: TodoConstants.TODO_LISTED,
//         payload: resp
//     }
// }