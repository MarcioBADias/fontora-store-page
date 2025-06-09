import React from 'react'
import styled from 'styled-components'

// Estilo da seção de depoimentos
export const TestimonialsContainer = styled.section`
  padding: 60px 100px;
  background-color: #ffffff;
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

export const TestimonialsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const TestimonialCard = styled.div`
  background-color: #f8f8f8;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.125rem;
    color: #555;
    margin-bottom: 20px;
    font-style: italic;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  span {
    font-size: 1rem;
    color: #888;
  }
`
