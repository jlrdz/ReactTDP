import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import { Provider as ShoppingCartProvider } from './context/ShoppingCart'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(response => setProducts(response))
  }, [])

  return (
    <ShoppingCartProvider>
      <div>
        <Products products={products}></Products>
        <hr />
        <Cart></Cart>

      </div>
    </ShoppingCartProvider>
  )
}

export default App
