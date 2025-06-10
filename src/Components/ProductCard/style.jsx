import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  flex-grow: 1;
  margin-bottom: 1rem;
`

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #b83242;
  margin-bottom: 1rem;
`

export const AddButton = styled.button`
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #b83242;
  }
`
