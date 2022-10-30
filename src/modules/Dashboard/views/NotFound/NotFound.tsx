import React, { FC } from 'react'
import styles from './NotFound.module.scss'

export interface NotFoundInterface {}

const NotFound: FC<NotFoundInterface> = () => {
	return <div className={styles.NotFound}>NotFound</div>
}

export default NotFound
