import { useState } from 'react'
import styled from 'styled-components'
import { ProductProvider } from './services/ProductContext'
import { Store } from './pages/Store'
import { AddOutfitForm } from './pages/AddOutfitForm'

const NavButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
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
  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  return (
    <ProductProvider>
      {currentPage === 'store' ? (
        <NavButton onClick={() => navigateTo('addForm')}>
          Cadastrar Peça
        </NavButton>
      ) : (
        <NavButton onClick={() => navigateTo('store')}>Ver Loja</NavButton>
      )}

      {currentPage === 'store' ? <Store /> : <AddOutfitForm />}
    </ProductProvider>
  )
}

export { App }
