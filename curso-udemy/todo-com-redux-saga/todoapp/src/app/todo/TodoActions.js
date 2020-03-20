import { initialize } from 'redux-form'
import todoTypes from './TodoTypes'
import todoService from './TodoService'
import Todo from './Todo'

// actions for general purposes

export function newTodo() {
    return {
        type: todoTypes.NEW_TODO
    }
}

export function formReset() {
    return initialize(todoTypes.FORM_ID, new Todo())
}

// actions for saga

export function requestListSaga() {
    return {
        type: todoTypes.LIST_REQUEST_SAGA
    }
}

export function requestListSagaSuccess(data) {
    return {
        type: todoTypes.LIST_REQUEST_SAGA_SUCCESS,
        payload: data
    }
}

export function requestListSagaFailure(error) {
    return {
        type: todoTypes.LIST_REQUEST_SAGA_FAILURE
    }
}

export function requestSaveSaga(todo) {
    return {
        type: todoTypes.SAVE_REQUEST_SAGA,
        payload: todo
    }
}

export function requestSaveSagaSuccess(data) {
    return {
        type: todoTypes.SAVE_REQUEST_SAGA_SUCCESS,
        payload: data
    }
}

export function requestSaveSagaFailure(error) {
    return {
        type: todoTypes.SAVE_REQUEST_SAGA_FAILURE
    }
}

export function requestDeleteSaga(id) {
    return {
        type: todoTypes.DELETE_REQUEST_SAGA,
        payload: id
    }
}

export function requestDeleteSagaSuccess(data) {
    return {
        type: todoTypes.DELETE_REQUEST_SAGA_SUCCESS,
        payload: data
    }
}

export function requestDeleteSagaFailure(error) {
    return {
        type: todoTypes.DELETE_REQUEST_SAGA_FAILURE
    }
}

// actions for thunk

export function requestList() {
    return (dispatch) => {
        todoService.list()
            .then(resp => {
                dispatch({
                    type: todoTypes.LIST_REQUEST,
                    payload: resp.data
                })
            })
    }
}

export function requestSave(todo) {
    return (dispatch) => {
        todoService.save(todo)
            .then(resp => {
                dispatch({
                    type: todoTypes.SAVE_REQUEST,
                    payload: resp.data
                })
            })
    }
}

export function requestDelete(id) {
    return (dispatch) => {
        todoService.delete(id)
            .then(resp => {
                dispatch({
                    type: todoTypes.DELETE_REQUEST,
                    payload: resp.data
                })
            })
    }
}