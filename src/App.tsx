// This Component Imports
import React from 'react'
import AppRoutes from './App.routes'
// Another Module Imports
import { Provider } from 'react-redux'
import store from '@app/store'
// Thirdparty Imports
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	)
}

export default App
