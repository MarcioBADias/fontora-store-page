import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #000;
  color: #fff;
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`
