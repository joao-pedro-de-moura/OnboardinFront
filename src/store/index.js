import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import root from './root'
import rootSaga from './rootSaga'

    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(root, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(rootSaga)


 export default store