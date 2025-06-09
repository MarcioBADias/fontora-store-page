import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SocialMediaIcons,
} from './styled'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>TI Automacoes</h3>
          <p>Transformando o futuro dos negócios com soluções de automação.</p>
        </FooterSection>
        <FooterSection>
          <h3>Links Rápidos</h3>
          <a href="#home">Início</a>
          <a href="#features">Funcionalidades</a>
          <a href="#pricing">Preços</a>
          <a href="#contact">Contato</a>
        </FooterSection>
        <FooterSection>
          <h3>Redes Sociais</h3>
          <SocialMediaIcons>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </SocialMediaIcons>
        </FooterSection>
      </FooterContent>
      <p>&copy; 2025 TI Automacoes. Todos os direitos reservados.</p>
    </FooterContainer>
  )
}

export { Footer }
