import { useCallback, useState } from "react"

const baseUrl = "https://fakestoreapi.com"

const defaultOptions = {}

export const useFetch = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()

    const sendRequest = useCallback(
        async (endpoint, options = defaultOptions) => {
            try {
                setLoading(true)
                const response = await fetch(`${baseUrl}${endpoint}`, options)
                if (!response.ok) {
                    throw new Error("Uh oh.")
                }
                setData(await response.json())
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
            const url = `${baseUrl}/${endpoint}`
            const response = await fetch(url, options)
        },
        []
    )

    return {
        loading,
        data,
        error,
        sendRequest
    }
}