import { createContext, useState } from "react"

const ShoppingCartContext = createContext({ items: [], addToCart: () => { } })

const { Provider, Consumer } = ShoppingCartContext

const ShoppingCartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const values = {
        items,
        addToCart: (title) => {
            setItems(prev => [...prev, title])
        }
    }
    return <Provider value={values}>
        {children}
    </Provider>
}

export default ShoppingCartContext
export { Consumer, ShoppingCartProvider as Provider }