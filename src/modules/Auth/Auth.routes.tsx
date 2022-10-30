// This Component Imports
import React, { FC, lazy } from 'react'
const Login = lazy(() => import('./views/Login/Login'))
const Register = lazy(() => import('./views/Register/Register'))
const Recover = lazy(() => import('./views/Recover/Recover'))
// Shared Imports
import { PublicRoutes, PrivateRoutes } from '@app/shared/models'
// Thirdparty Imports
import { Navigate, Route, Routes } from 'react-router-dom'

export interface AuthRoutesInterface {}

const AuthRoutes: FC<AuthRoutesInterface> = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to={PrivateRoutes.dashboard} />} />
			<Route path={PublicRoutes.login} element={<Login />} />
			<Route path={PublicRoutes.register} element={<Register />} />
			<Route path={PublicRoutes.recover} element={<Recover />} />
			{/* Wild Card */}
			<Route path='*' element={<>not found auth</>} />
		</Routes>
	)
}

export default AuthRoutes
