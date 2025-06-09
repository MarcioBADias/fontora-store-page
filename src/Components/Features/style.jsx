import React from 'react'
import styled from 'styled-components'

// Definindo o estilo do Features Section
export const FeaturesContainer = styled.section`
  padding: 60px 100px;
  background-color: #f5f5f5;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const FeatureCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    font-size: 1.125rem;
    color: #555;
  }
`
