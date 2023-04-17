const initialState = {
    token: false,
    user: {}
}

export default function reduce (state = initialState, action){
    switch(action.type){
        case 'SUCCESS': {
                
                const newState = {...state}
                newState.botaoClicado = !newState.botaoClicado
                console.log( action.payload)
            return newState
        }

        case 'ERRO': {
           console.log("erro")
           return state
    }

    case 'REQUEST': {

        console.log(action.payload)
        return state
}
        
        default: return  state
    }
    

}