// This Component Imports
import React, { FC } from 'react'
import styles from './Home.module.scss'

export interface HomeInterface {}

const Home: FC<HomeInterface> = () => {
	return <div className={styles.Home}>Home</div>
}

export default Home
