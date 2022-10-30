// This Component Imports
import React, { FC } from 'react'
import styles from './Users.module.scss'

export interface UsersInterface {}

const Users: FC<UsersInterface> = () => {
	return <div className={styles.Users}>Users</div>
}

export default Users
