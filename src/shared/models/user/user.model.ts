// Shared Imports

import { Roles } from '@app/shared/models'

export interface User {
	id: string
	name: string
	email: string
	role: Roles
}
