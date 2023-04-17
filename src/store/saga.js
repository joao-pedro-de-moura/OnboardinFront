import { put, call, all, takeLatest} from 'redux-saga/effects'
import * as actions from './actions'
import axios from '../services/axios'



function* requests({payload}){
    try{
       
            const response = yield call(axios.post,'/auth', payload)
            
            yield put(actions.clicaBotaoSuccess({...response.data}))
          
            console.log("Logado");
    }catch{
        const response = yield call(axios.post,'/auth', payload)
        yield put(actions.clicaBotaoErro())
        console.log(payload);
        console.log(response.data)

    }
   

}

export default all([takeLatest("REQUEST",requests)])