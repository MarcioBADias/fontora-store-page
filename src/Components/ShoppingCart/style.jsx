import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`
export const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  z-index: 1000;
  max-height: 90vh;
  overflow-y: auto;
`
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
`
export const QtdyBtn = styled.button`
  margin-right: 10;
  padding-right: 8;
  padding-left: 8;
  background-color: '#222';
  color: 'white';
  border-radius: 10;
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
