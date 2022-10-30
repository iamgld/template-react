// Store Imports
import { createAction } from '@reduxjs/toolkit'
import { UserStore } from '@app/shared/models'

export const updateUser = createAction('[user] update', (user: UserStore) => {
	return {
		payload: {
			user,
		},
	}
})

export const resetUser = createAction('[user] reset')
