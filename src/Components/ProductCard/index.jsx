import { useProducts } from '../../context/ProductContext'
import {
  CardContainer,
  ProductImage,
  InfoContainer,
  ProductName,
  ProductDescription,
  ProductPrice,
  AddButton,
} from './style'

const ProductCard = ({ product }) => {
  const { dispatch } = useProducts()

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
        <AddButton onClick={handleAddToCart}>Adicionar ao Carrinho</AddButton>
      </InfoContainer>
    </CardContainer>
  )
}

export { ProductCard }
