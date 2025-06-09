import React from 'react'
import styled from 'styled-components'

// Estilo do footer
export const FooterContainer = styled.footer`
  background-color: #003d5b;
  color: white;
  padding: 40px 100px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const FooterSection = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p,
  a {
    font-size: 1rem;
    color: white;
    margin-bottom: 10px;
    text-decoration: none;
    &:hover {
      color: #f24e1e;
    }
  }
`

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 20px;

  a {
    font-size: 1.5rem;
    color: white;
    transition: color 0.3s ease;
    &:hover {
      color: #f24e1e;
    }
  }
`
