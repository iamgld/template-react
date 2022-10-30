// Store Imports
import React from 'react'
import { AppStore } from '@app/store'
import { useSelector } from 'react-redux'
// Shared Imports
import { PrivateRoutes, Roles } from '@app/shared/models'
// Thirdparty Imports
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
	roles: Roles[]
}

export const RolesGuard = ({ roles }: Props) => {
	const userState = useSelector((store: AppStore) => store.user)

	return roles.length && roles.includes(userState.role) ? (
		<Outlet />
	) : (
		<Navigate replace to={`/${PrivateRoutes.dashboard}`} />
	)
}

export default RolesGuard
