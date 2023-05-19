import { put, call, all, takeLatest} from 'redux-saga/effects'
import * as actions from './actions'
import axios from '../services/axios'
import {  toast } from 'react-toastify';
import {get} from 'lodash'



function* requests({payload}){
    try{
        const response = yield call(axios.post,'/auth', payload)
        yield put(actions.clicaBotaoSuccess({...response.data}))    
        axios.defaults.headers.Authorizaton = `Bearer ${response.data.token}`     
    }catch{
        toast.error("Email ou senha invalidos")
        yield put(actions.clicaBotaoErro())  
    }
   

}

function* register({payload}){
    try{
      const response =  yield call(axios.post,'/clients', payload) 
    }catch{

        toast.error("Email ou senha invalidos")
        yield put(actions.clicaBotaoErro())
        
    }
   

}

function* editRequest({payload}){
        const {id, email, name} = payload
        try{
            console.log(payload)
            if(id){
               yield call(axios.put, `/clients/${id}`, {
                    email,
                    name
                })
                
            }
        }catch{
                yield put(actions.editFailure())

        }

        
}

function persist({payload}){
        console.log(payload)
        const token = get(payload, 'auth.token')
      
        if(!token) return
        axios.defaults.headers.Authorizaton = `Bearer ${token}`
       

}

export default all([
                    takeLatest("REGISTER_SUCCESS",register),
                    takeLatest("REQUEST",requests),
                    takeLatest("persist/REHYDRATE",persist),
                    takeLatest("EDIT_REQUEST",editRequest)
                ])
