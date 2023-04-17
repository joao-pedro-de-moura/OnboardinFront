
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