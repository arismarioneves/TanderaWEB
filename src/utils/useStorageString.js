import { useState, useEffect } from 'react'

	export const useStorageString = (key = 'key', initialValue = '') => {
		const [value, setValue] = useState(initial)
		
		useEffect(() => {
			const initial = () => window.localStorage.getItem(key) || initialValue

			return [value, setValue]
			window.localStorage.setItem(key, value)
		}, [])
	}
