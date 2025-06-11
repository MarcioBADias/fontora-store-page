import { useEffect } from 'react'
import { useProducts } from '../../services/ProductContext'
import { ProductCard } from '../../Components/ProductCard'
import { ShoppingCart } from '../../Components/ShoppingCart'
import { FaShoppingCart } from 'react-icons/fa'
import {
  StoreContainer,
  StoreHeader,
  Logo,
  StoreTitle,
  ProductsGrid,
  FloatingCartButton,
  ItemCounter,
} from './style'

const Store = () => {
  const { state, loadProducts, dispatch } = useProducts()

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const openCart = () => dispatch({ type: 'OPEN_CART' })

  const totalItemsInCart = state.cart.reduce(
    (acc, item) => acc + item.quantity,
    0,
  )

  return (
    <StoreContainer>
      <StoreHeader>
        <Logo src="logo_Carmen_Fontora.png" alt="Logo Carmen Fontoura" />
        <StoreTitle>Loja Carmen Fontoura</StoreTitle>
      </StoreHeader>

      <ProductsGrid>
        {state.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>

      <FloatingCartButton onClick={openCart}>
        <FaShoppingCart style={{ height: 25, width: 25 }} />
        {totalItemsInCart > 0 && <ItemCounter>{totalItemsInCart}</ItemCounter>}
      </FloatingCartButton>

      <ShoppingCart />
    </StoreContainer>
  )
}

export { Store }
