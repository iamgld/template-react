// This Component Imports
import React, { FC, lazy } from 'react'
const Home = lazy(() => import('./views/Home/Home'))
const Users = lazy(() => import('./views/Users/Users'))
const NotFound = lazy(() => import('./views/NotFound/NotFound'))
// Shared Imports
import { PrivateRoutes, Roles } from '@app/shared/models'
import { RolesGuard } from '@app/shared/guards'
// Thirdparty Imports
import { Navigate, Route, Routes } from 'react-router-dom'

export interface DashboardRoutesInterface {}

const DashboardRoutes: FC<DashboardRoutesInterface> = () => {
	return (
		<Routes>
			<Route element={<RolesGuard roles={[Roles.unknown, Roles.admin, Roles.manager]} />}>
				<Route path='/' element={<Navigate to={PrivateRoutes.home} />} />
			</Route>

			<Route element={<RolesGuard roles={[Roles.unknown, Roles.admin, Roles.manager]} />}>
				<Route path={PrivateRoutes.home} element={<Home />} />
			</Route>

			<Route element={<RolesGuard roles={[Roles.admin, Roles.manager]} />}>
				<Route path={PrivateRoutes.users} element={<Users />} />
			</Route>

			<Route element={<RolesGuard roles={[Roles.unknown, Roles.admin, Roles.manager]} />}>
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default DashboardRoutes
