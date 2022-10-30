// This Component Imports
import React, { FC } from 'react'
import styles from './Spinner.module.scss'

export interface SpinnerInterface {}

const Spinner: FC<SpinnerInterface> = () => {
	return <div className={styles.Spinner}>Spinner</div>
}

export default Spinner
