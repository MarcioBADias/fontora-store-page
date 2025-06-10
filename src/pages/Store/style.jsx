import styled from 'styled-components'

export const StoreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

export const StoreHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Logo = styled.img`
  width: 150px;
  height: auto;
`

export const StoreTitle = styled.h1`
  font-size: 2.5rem;
  color: #222;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`

export const FloatingCartButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
`

export const ItemCounter = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
`
