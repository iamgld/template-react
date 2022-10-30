// This Component Imports
import React, { FC, Suspense } from 'react'
import DashboardRoutes from './Dashboard.routes'
// This Module Imports
import { Navbar } from '@app/dashboard/components'

export interface DashboardInterface {}

const Dashboard: FC<DashboardInterface> = () => {
	return (
		<>
			<Navbar />
			<Suspense fallback={<p>loading</p>}>
				<DashboardRoutes />
			</Suspense>
		</>
	)
}

export default Dashboard
