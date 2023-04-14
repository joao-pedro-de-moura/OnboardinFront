import {all} from 'redux-saga/effects'

import request from './saga'

export default function* rootSaga(){
    return yield all ([request])
}