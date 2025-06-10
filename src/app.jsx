import { ProductProvider } from './context/ProductContext'
import { Store } from './pages/Store'
import { GlobalStyle } from './styles/GlobalStyle .jsx'

function App() {
  return (
    <ProductProvider>
      <GlobalStyle />
      <Store />
    </ProductProvider>
  )
}

export { App }
