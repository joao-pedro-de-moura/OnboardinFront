import {call, put, all, takeLatest} from 'redux-saga/effects'
import * as actions from './actions'



function* requests(payload){
    console.log(payload)
   

}

export default all([takeLatest("REQUEST",requests)])