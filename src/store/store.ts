// Store Imports
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@app/store/reducers'
// Shared Imports
import { UserStore } from '@app/shared/models'

export interface AppStore {
	user: UserStore
}

export default configureStore<AppStore>({
	reducer: {
		user: userReducer,
	},
})
