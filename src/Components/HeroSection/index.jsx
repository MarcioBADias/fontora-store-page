import React from 'react'
import { HeroContainer, HeroImage, HeroText } from './style'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Transforme seu negócio com TI Automacoes</h1>
        <p>
          Solução completa para gestão e automação de vendas, ideal para o seu
          negócio crescer com mais eficiência e controle.
        </p>
        <button>Saiba mais</button>
      </HeroText>
      <HeroImage>
        <img
          src="#" // Substitua pela imagem real
          alt="Imagem ilustrativa do sistema"
        />
      </HeroImage>
    </HeroContainer>
  )
}

export { HeroSection }
