import { useProducts } from '../../services/ProductContext'
import {
  Backdrop,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  CartItem,
  ItemImage,
  ItemInfo,
  QuantityControls,
  TotalInfo,
  CheckoutButton,
  ClearButton,
} from './style'

const ShoppingCart = () => {
  const { state, dispatch } = useProducts()

  if (!state.isCartOpen) {
    return null
  }

  const closeCart = () => dispatch({ type: 'CLOSE_CART' })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const handleCheckout = () => {
    alert('Compra finalizada com sucesso!')
    clearCart()
    closeCart()
  }

  const handleQuantityChange = (id, delta) => {
    const item = state.cart.find((i) => i.id === id)
    const newQuantity = item.quantity + delta
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: newQuantity },
    })
  }

  const total = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <Backdrop onClick={closeCart}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Seu Carrinho</h2>
          <CloseButton onClick={closeCart}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          {state.cart.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            state.cart.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <h4>{item.name}</h4>
                  <p>R$ {item.price.toFixed(2)}</p>
                </ItemInfo>
                <QuantityControls>
                  <button onClick={() => handleQuantityChange(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </button>
                </QuantityControls>
              </CartItem>
            ))
          )}
        </ModalBody>
        <ModalFooter>
          {state.cart.length > 0 && (
            <>
              <TotalInfo>Total: R$ {total.toFixed(2)}</TotalInfo>
              <ClearButton onClick={clearCart}>Limpar Carrinho</ClearButton>
              <CheckoutButton onClick={handleCheckout}>
                Finalizar Compra
              </CheckoutButton>
            </>
          )}
        </ModalFooter>
      </ModalContainer>
    </Backdrop>
  )
}

export { ShoppingCart }
