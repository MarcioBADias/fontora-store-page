import React from 'react'
import styled from 'styled-components'

// Definindo o estilo do HeroSection
export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;
  background-color: #003d5b;
  color: white;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`

export const HeroText = styled.div`
  max-width: 500px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }

  button {
    padding: 15px 30px;
    font-size: 1rem;
    background-color: #f24e1e;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d63f18;
    }
  }
`

export const HeroImage = styled.div`
  img {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`
