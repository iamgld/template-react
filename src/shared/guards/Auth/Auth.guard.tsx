// Store Imports
import React from 'react'
import { AppStore } from '@app/store'
import { useSelector } from 'react-redux'
// Shared Imports
import { PublicRoutes } from '@app/shared/models'
// Thirdparty Imports
import { Navigate, Outlet } from 'react-router-dom'

export const AuthGuard = () => {
	const userState = useSelector((store: AppStore) => store.user)

	return userState.id ? <Outlet /> : <Navigate replace to={`/${PublicRoutes.login}`} />
}

export default AuthGuard
