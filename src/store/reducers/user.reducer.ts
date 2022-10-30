// Store Imports
import { createReducer } from '@reduxjs/toolkit'
import { Roles, UserStore } from '@app/shared/models'
import { updateUser, resetUser } from '@app/store/actions'

const initialStateUser: UserStore = {
	id: '',
	name: '',
	email: '',
	role: Roles.unknown,
}

export const userReducer = createReducer(initialStateUser, (builder) => {
	builder.addCase(updateUser, (state, action) => action.payload.user)
	builder.addCase(resetUser, () => initialStateUser)
})
