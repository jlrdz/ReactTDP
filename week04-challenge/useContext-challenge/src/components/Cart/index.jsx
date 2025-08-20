import { useContext } from "react"
import ShoppingCartContext from "../../context/ShoppingCart"

const Cart = () => {
    const { items } = useContext(ShoppingCartContext)
    return <>
        {items.map(item => (
            <li key={item}>{item}</li>
        ))}
    </>
}

export default Cart