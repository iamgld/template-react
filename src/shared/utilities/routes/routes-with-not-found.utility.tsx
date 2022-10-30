// This Component Imports
import React, { ReactNode } from 'react'
// Thirdparty Imports
import { Route, Routes } from 'react-router-dom'

interface Props {
	children: ReactNode[] | ReactNode
}

const routesWithNotFound = ({ children }: Props) => {
	return (
		<Routes>
			{children}
			<Route path='*' element={<>not found</>} />
		</Routes>
	)
}
export default routesWithNotFound
