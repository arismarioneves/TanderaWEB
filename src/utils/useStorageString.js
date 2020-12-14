import { useState, useEffect } from 'react'

	export const useStorageString = (key = 'key', initialValue = '') => {
		const [value, setValue] = useState(initial)
		const initial = () => window.localStorage.getItem(key) || initialValue
		
		useEffect(() => {
			return [value, setValue]
			window.localStorage.setItem(key, value)
		}, [])
	}
