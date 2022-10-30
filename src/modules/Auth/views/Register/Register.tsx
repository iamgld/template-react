// This Component Imports
import React, { FC } from 'react'
import styles from './Register.module.scss'
// Shared Imports
import { PublicRoutes } from '@app/shared/models'
// Thirdparty Imports
import { Paper, Button, TextField, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export interface RegisterInterface {}

const Register: FC<RegisterInterface> = () => {
	const navigate = useNavigate()

	const goToLogin = (): void => {
		navigate(`/${PublicRoutes.login}`)
	}

	return (
		<article className={styles.Register}>
			<Paper variant='outlined' className={styles.Register__paper}>
				<h2 className={styles.Register__title}>register</h2>
				<TextField size='small' label='Name' variant='outlined' />
				<TextField size='small' label='Email' variant='outlined' />
				<TextField size='small' label='Password' variant='outlined' />
				<Button variant='contained' size='large'>
					Register
				</Button>
				<Link underline='hover' className={styles.Register__login} onClick={goToLogin}>
					login
				</Link>
			</Paper>
		</article>
	)
}

export default Register
