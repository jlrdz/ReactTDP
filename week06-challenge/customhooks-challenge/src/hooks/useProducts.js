import { useEffect } from "react"
import { useFetch } from "./useFetch"

export const useProducts = () => {

    const { sendRequest, ...rest } = useFetch()

    useEffect(() => {
        sendRequest('/products')
    }, [sendRequest])

    return rest
}