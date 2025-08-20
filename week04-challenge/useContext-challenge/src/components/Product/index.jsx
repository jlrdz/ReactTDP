import { useContext } from "react"
import ShoppingCartContext from "../../context/ShoppingCart"


const Product = ({ product }) => {
    const {addToCart}= useContext(ShoppingCartContext)

    return <>
        <button onClick={() => addToCart(product.title)}>Add to cart</button>
        {product.title}
    </>
}

export default Product