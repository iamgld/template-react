// Thirdparty Imports
import axios from 'axios-observable'
import { AxiosError } from 'axios'
import { Observable, catchError, throwError, map } from 'rxjs'

export const useLogger = () => {
	function get(): Observable<string> {
		return axios.get(`${import.meta.env.VITE_APP_API_URL}/character`).pipe(
			catchError((error: AxiosError) => throwError(() => error)),
			map((response: any) => response.token)
		)
	}

	function login(): Observable<string> {
		const payload = {
			email: 'gregor@gmail.com',
			password: 'gregor1234',
		}

		return axios.post('', payload).pipe(
			catchError((error: AxiosError) => throwError(() => error)),
			map((response: any) => response.token)
		)
	}

	function register(): Observable<string> {
		const payload = {
			name: 'gregor',
			email: 'gregor@gmail.com',
			password: 'gregor1234',
		}

		return axios.post('', payload).pipe(
			catchError((error: AxiosError) => throwError(() => error)),
			map((response: any) => response.token)
		)
	}

	return { get, login, register }
}
