import  storage  from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers =>{
    const persistReduce = persistReducer({
        key: 'REACT-BASE',
        storage,
        whitelist: ['store']
    },
    reducers)

    return persistReduce
}