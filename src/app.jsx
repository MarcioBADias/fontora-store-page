import { Store } from './pages/Store/index.jsx'
import { ProductProvider } from './services/ProductContext.jsx'

function App() {
  return (
    <ProductProvider>
      <Store />
    </ProductProvider>
  )
}

export { App }
