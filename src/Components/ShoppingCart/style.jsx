import styled from 'styled-components'

export const Backdrop = styled.div``
export const ModalContainer = styled.div``
export const ModalHeader = styled.div``

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #333;
  }
`

export const ModalBody = styled.div``

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 1rem;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`

export const ItemInfo = styled.div`
  flex-grow: 1;
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* ... */
`

export const ModalFooter = styled.div``
export const TotalInfo = styled.h3``

export const CheckoutButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 1rem;
`

export const ClearButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
