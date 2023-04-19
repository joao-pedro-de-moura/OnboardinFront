import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import root from './root'
import rootSaga from './rootSaga'
import persist from './persist'
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(persist(root), applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
 export default store