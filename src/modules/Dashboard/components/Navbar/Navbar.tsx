// This Component Imports
import React, { FC } from 'react'
// import styles from './styles/Navbar.module.scss'
// Shared Imports
import { PrivateRoutes, PublicRoutes } from '@app/shared/models'
// Store Imports
import { useDispatch } from 'react-redux'
import { resetUser } from '@app/store/actions'
// Thirdparty Imports
import { useNavigate } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export interface NavbarInterface {}

const Navbar: FC<NavbarInterface> = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const onLogout = (): void => {
		dispatch(resetUser())
		navigate(`/${PublicRoutes.login}`)
	}

	const onNavigate = (route: PrivateRoutes): void => {
		navigate(route)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						News
					</Typography>
					<Button color='inherit' onClick={() => onNavigate(PrivateRoutes.home)}>
						home
					</Button>
					<Button color='inherit' onClick={() => onNavigate(PrivateRoutes.users)}>
						users
					</Button>
					<Button color='inherit' onClick={() => onNavigate(PrivateRoutes.wrong)}>
						wrong
					</Button>
					<Button color='inherit' onClick={onLogout}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar
