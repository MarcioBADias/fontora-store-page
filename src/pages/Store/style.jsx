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
  bottom: 40px;
  right: 30px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 998;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b83242;
  }
`

export const ItemCounter = styled.p`
  position: fixed;
  bottom: 18px;
  right: 40px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  z-index: 999;
  transition: background-color 0.3s ease;
  text-align: center;
`
