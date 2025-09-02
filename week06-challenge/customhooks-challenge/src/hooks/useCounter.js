import { useState } from "react"

export const useCounter = (initialValue) => {
    return useState(initialValue)
}