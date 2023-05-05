
export function clicaBotaoRequest(payload){
    return{
        type: 'REQUEST',
        payload
    }

}
export function clicaBotaoErro(payload){
    return{
        type: 'ERRO',
        payload

    }
 
}
export function clicaBotaoSuccess(payload){
    return{
        type: 'SUCCESS',
        payload

    }

}

export function editRequest(payload){
    return{
        type: 'EDIT_REQUEST',
        payload
    }

}
export function editSuccsses(payload){
    return{
        type: 'EDIT_SUCCESS',
        payload

    }
 
}
export function editFailure(payload){
    return{
        type: 'EDIT_ERRO',
        payload

    }

}

export function registerRequest(payload){
    return{
        type: 'REGISTER_REQUEST',
        payload
    }

}
export function registerSuccsses(payload){
    return{
        type: 'REGISTER_SUCCESS',
        payload

    }
 
}
export function registerFailure(payload){
    return{
        type: 'REGISTER_ERRO',
        payload

    }

}