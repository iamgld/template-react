// This Component Imports
import React, { FC, Suspense } from 'react'
import AuthRoutes from './Auth.routes'

export interface AuthInterface {}

const Auth: FC<AuthInterface> = () => {
	return (
		<>
			<Suspense fallback={<p>loading</p>}>
				<AuthRoutes />
			</Suspense>
		</>
	)
}

export default Auth
