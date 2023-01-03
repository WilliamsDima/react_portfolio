import { useEffect, useState } from "react"

export const useSessionStorage = (key: string, initialValue?: any) => {
	const [value, setValue] = useState(() => {
		const jsonValue = sessionStorage.getItem(key)

		if (jsonValue) return JSON.parse(jsonValue)

		return initialValue
	})

	useEffect(() => {
		if (value) sessionStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
