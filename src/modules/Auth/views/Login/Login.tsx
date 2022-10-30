// This Component Imports
import React, { FC } from 'react'
import styles from './Login.module.scss'
// This Module Imports
import { useLogger } from '@app/auth/services'
// Shared Imports
import { PublicRoutes, PrivateRoutes, UserStore, Roles } from '@app/shared/models'
// Store Imports
import { useDispatch } from 'react-redux'
import { updateUser } from '@app/store/actions'
// Thirdparty Imports
import { Paper, Button, TextField, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export interface LoginInterface {}

const Login: FC<LoginInterface> = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const logger = useLogger()

	const goToRegister = (): void => {
		navigate(`/${PublicRoutes.register}`)
	}

	const onLogin = (): void => {
		logger.get().subscribe({
			next: () => {
				const user: UserStore = {
					id: '1',
					name: 'Gregor Lopez',
					email: 'gregor@gmail.com',
					role: Roles.manager,
				}
				dispatch(updateUser(user))
				navigate(`/${PrivateRoutes.dashboard}`)
			},
			error: () => {},
		})
	}

	return (
		<article className={styles.Login}>
			<Paper variant='outlined' className={styles.Login__paper}>
				<h2 className={styles.Login__title}>login</h2>
				<TextField size='small' label='Email' variant='outlined' />
				<TextField size='small' label='Password' variant='outlined' />
				<Button variant='contained' size='large' onClick={onLogin}>
					Login
				</Button>
				<Link underline='hover' className={styles.Login__register} onClick={goToRegister}>
					register
				</Link>
			</Paper>
		</article>
	)
}

export default Login
