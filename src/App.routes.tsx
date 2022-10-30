// This Component Imports
import React, { FC, lazy, Suspense } from 'react'
// Another Module Imports
const Auth = lazy(() => import('./modules/Auth/Auth'))
const Dashboard = lazy(() => import('./modules/Dashboard/Dashboard'))
// Shared Imports
import { AuthGuard } from '@app/shared/guards'
import { Spinner } from '@app/shared/components'
import { PrivateRoutes } from '@app/shared/models'
// Thirdparty Imports
import { Route, Routes } from 'react-router-dom'

export interface AppRoutesInterface {}

const AppRoutes: FC<AppRoutesInterface> = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				{/* Public Sections */}
				<Route path={`/*`} element={<Auth />} />

				{/* Private Section */}
				<Route element={<AuthGuard />}>
					<Route path={`/${PrivateRoutes.dashboard}/*`} element={<Dashboard />} />
				</Route>

				{/* Wild Card */}
				<Route path='*' element={<>not found</>} />
			</Routes>
		</Suspense>
	)
}

export default AppRoutes
