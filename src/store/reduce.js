

const initialState = {
    token: false,
    user: {},
    isLoggedIn: false
}

export default function reduce (state = initialState, action){
    console.log(action.type)
    switch(action.type){
        case 'SUCCESS': { 
                const newState = {...state}
                newState.token = action.payload.token
                newState.user = action.payload.user
                newState.isLoggedIn = true
                
            return newState
        }
 
        case 'ERRO': {
           console.log("erro")
           return initialState
    }

    case 'REQUEST': {

        console.log(action.payload)
        return state
}
        
        default: return  state
    }
    

}