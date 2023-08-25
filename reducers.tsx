import { combineReducers } from 'redux'
import sidebarReducer from './reducers/toggleSidebarReducers'
import ModalLoginReducer from './reducers/showHideModel'
import closeOpenReducer from './reducers/closeOpenModel'

const rootReducer = combineReducers({
	sidebar: sidebarReducer,
	modalLogin: closeOpenReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
