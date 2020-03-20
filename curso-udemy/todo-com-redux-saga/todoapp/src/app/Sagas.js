import { all } from 'redux-saga/effects'

import todoSaga from './todo/TodoSaga'

export default function* rootSaga() {
    yield all([
        todoSaga()
    ]);
}