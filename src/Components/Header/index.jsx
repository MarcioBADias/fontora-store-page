import React from 'react'
import { HeaderContainer, Logo, Nav, NavLink } from './style'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>TI Automacoes</Logo>
      <Nav>
        <NavLink href="#features">Funcionalidades</NavLink>
        <NavLink href="#pricing">Preços</NavLink>
        <NavLink href="#testimonials">Depoimentos</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export { Header }
