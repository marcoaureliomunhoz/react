import axios from 'axios'
import { TodoConstants } from '../_constants/TodoConstants'
import { getItems } from './TodoActions'

export const deleteItem = (id) => {
    return dispatch => {
        axios
            .delete(`${TodoConstants.API_URL}/${id}`)
            .then(resp => dispatch(getItems()))
    }
}