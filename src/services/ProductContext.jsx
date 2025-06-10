import { createContext, useReducer, useContext } from 'react'
import { mockProducts } from './productData'

const initialState = {
  products: [],
  cart: [],
  isCartOpen: false,
}

const productReducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return { ...state, products: action.payload }
  }
  if (action.type === 'ADD_TO_CART') {
    const itemInCart = state.cart.find((item) => item.id === action.payload.id)
    if (itemInCart) {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }
    }
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, quantity: 1 }],
    }
  }
  if (action.type === 'REMOVE_FROM_CART') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    }
  }
  if (action.type === 'UPDATE_QUANTITY') {
    const { id, quantity } = action.payload
    if (quantity <= 0) {
      return { ...state, cart: state.cart.filter((item) => item.id !== id) }
    }
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    }
  }
  if (action.type === 'OPEN_CART') {
    return { ...state, isCartOpen: true }
  }
  if (action.type === 'CLOSE_CART') {
    return { ...state, isCartOpen: false }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  return state
}

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  const loadProducts = () => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: mockProducts })
  }

  return (
    <ProductContext.Provider value={{ state, dispatch, loadProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
