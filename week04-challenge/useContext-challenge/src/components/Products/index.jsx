

import Product from '../Product'

const Products = ({ products }) => {
    return <>
        {products.map(product => (
            <li key={product.id}>
                <Product product={product} ></Product>
            </li>
        ))}
    </>
}

export default Products
