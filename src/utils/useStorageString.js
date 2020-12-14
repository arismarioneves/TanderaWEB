import { useState, useEffect } from 'react'

useEffect(() => {
	export const useStorageString = (key = 'key', initialValue = '') => {
		const initial = () => window.localStorage.getItem(key) || initialValue
		const [value, setValue] = useState(initial)

		return [value, setValue]
	}
	
	window.localStorage.setItem(key, value)
}, [value])
