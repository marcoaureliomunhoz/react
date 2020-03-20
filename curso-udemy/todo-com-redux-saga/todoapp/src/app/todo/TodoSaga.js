import todoTypes from './TodoTypes'

// effects

import { all, takeLatest, call, put, fork } from 'redux-saga/effects'

// services/api and action creators

import todoService from './TodoService'
import { 
    requestListSagaSuccess, requestListSagaFailure,
    requestSaveSagaSuccess, requestSaveSagaFailure,
    requestDeleteSagaSuccess, requestDeleteSagaFailure, requestListSaga
} from './TodoActions'

function* callList() {
    try {
        const response = yield call(todoService.list)

        yield put(requestListSagaSuccess(response.data))
    } catch (e) {
        console.log('Error to callList: ', e)
        yield put(requestListSagaFailure(e))
    }
}

function* callSave(action) {
    try {
        const response = yield call(todoService.save, action.payload)

        yield put(requestSaveSagaSuccess(response.data))
    } catch (e) {
        console.log('Error to callSave: ', e)
        yield put(requestSaveSagaFailure(e))
    }
}

function* callDelete(action) {
    try {
        const response = yield call(todoService.delete, action.payload)

        yield put(requestDeleteSagaSuccess(response.data))
        yield put(requestListSaga())
    } catch (e) {
        console.log('Error to callDelete: ', e)
        yield put(requestDeleteSagaFailure(e))
    }
}

// watchers

export function* watchListRequestSaga() {
    yield takeLatest(todoTypes.LIST_REQUEST_SAGA, callList)
}

export function* watchSaveRequestSaga() {
    yield takeLatest(todoTypes.SAVE_REQUEST_SAGA, callSave)
}

export function* watchDeleteRequestSaga() {
    yield takeLatest(todoTypes.DELETE_REQUEST_SAGA, callDelete)
}

// root to Todo domain

export default function* todoSaga() {
    yield all([
        //fork is for not blocking UI
        fork(watchListRequestSaga), 
        fork(watchSaveRequestSaga),
        fork(watchDeleteRequestSaga),
    ])
}