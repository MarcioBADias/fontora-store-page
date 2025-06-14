import { useState } from 'react'
import { ProductProvider } from './services/ProductContext'
import { Store } from './pages/Store'
import { AddOutfitForm } from './pages/AddOutfitForm'
import { PendingOrders } from './pages/PendingOrders'
import styled from 'styled-components'

const NavContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  gap: 10px;
`

const NavButton = styled.button`
  padding: 10px 15px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`

function App() {
  const [currentPage, setCurrentPage] = useState('store')

  const renderPage = () => {
    switch (currentPage) {
      case 'store':
        return <Store />
      case 'addForm':
        return <AddOutfitForm />
      case 'pending':
        return <PendingOrders />
      default:
        return <Store />
    }
  }

  return (
    <ProductProvider>
      <NavContainer>
        <NavButton onClick={() => setCurrentPage('store')}>Ver Loja</NavButton>
        <NavButton onClick={() => setCurrentPage('addForm')}>
          Cadastrar Peça
        </NavButton>
        <NavButton onClick={() => setCurrentPage('pending')}>
          Pedidos Pendentes
        </NavButton>
      </NavContainer>

      {renderPage()}
    </ProductProvider>
  )
}

export { App }
