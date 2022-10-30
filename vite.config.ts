import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths()],
	server: {
		port: 3000,
	},
	// esbuild: {
	// 	jsxInject: `import React from 'react'`,
	// },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@styles': path.resolve(__dirname, './src/styles/styles.scss'),
		},
	},
})
