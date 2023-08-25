import { TOGGLE_SIDEBAR, ToggleSidebarAction, TOGGLE_MODAL, ToggleModalAction } from './types'

export const toggleSidebar = (): ToggleSidebarAction => ({
	type: TOGGLE_SIDEBAR,
})

export const toggleModalLogin = (): ToggleModalAction => ({
	type: TOGGLE_MODAL,
})
// store/actions.ts
import { ActionType, OpenModalAction, CloseModalAction } from './types'

export const openModal = (): OpenModalAction => ({
	type: ActionType.OPEN_MODAL,
})

export const closeModal = (): CloseModalAction => ({
	type: ActionType.CLOSE_MODAL,
})
