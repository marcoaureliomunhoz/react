import axios from 'axios'
import { TodoConstants } from '../_constants/TodoConstants'
import { getItems } from './TodoActions'

const addTodoType = resp => ({
    type: TodoConstants.TODO_ADDED,
    payload: resp.data
})

export const changeFieldValue = (e) => {
    return {
        type: TodoConstants.TODO_DESCRIPTION_CHANGED,
        payload: e.target.value
    }
}

// qdo retornamos um array, o middleware multi atua
export const clearForm = () => {
    return [
        { type: TodoConstants.TODO_CLEAR_FORM },
        getItems()
    ]
}

export const addTodo = (description) => {
    return dispatch => {
        axios
            .post(TodoConstants.API_URL, { description })
            //.then(resp => dispatch(addTodoType(resp)))
            .then(resp => dispatch(getItems()))
    }
}