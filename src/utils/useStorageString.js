import { useState, useEffect } from 'react'

	export const useStorageString = (key = 'key', initialValue = '') => {
		useEffect(() => {
			const initial = () => window.localStorage.getItem(key) || initialValue
			const [value, setValue] = useState(initial)

			return [value, setValue]
			window.localStorage.setItem(key, value)
		}, [value])
	}
