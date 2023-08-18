import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import localStorageMiddleware from './localStorageMiddleware'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(localStorageMiddleware)))

export default store
