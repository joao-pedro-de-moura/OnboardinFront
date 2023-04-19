import { put, call, all, takeLatest} from 'redux-saga/effects'
import * as actions from './actions'
import axios from '../services/axios'




function* requests({payload}){
    try{
        const response = yield call(axios.post,'/auth', payload) 
        yield put(actions.clicaBotaoSuccess({...response.data}))     
    }catch{
        console.log("erro");
    }
   

}

function* editRequest({payload}){
        const {id, email, name} = payload
        try{
            if(id){
                yield call(axios.put, `/clients/${id}`, {
                    email,
                    name
                })
            }
        }catch{
                console.log("erro")
                yield put(actions.editFailure())
        }
}
export default all([
                    takeLatest("REQUEST",requests),
                    takeLatest("EDIT_REQUEST",editRequest)
                ])
