import React, { FC } from 'react'
import styles from './styles/Thing.module.scss'

export interface ThingInterface {}

const Thing: FC<ThingInterface> = () => {
	return <div className={styles.Thing}>Thing</div>
}

export default Thing
