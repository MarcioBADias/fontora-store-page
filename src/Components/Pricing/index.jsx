import {
  PricingButton,
  PricingCard,
  PricingContainer,
  PricingFeature,
  PricingFeatures,
  PricingGrid,
  PricingPlan,
  PricingPrice,
  PricingTitle,
} from './style'

const Pricing = () => {
  return (
    <PricingContainer id="pricing">
      <PricingTitle>Escolha seu Plano</PricingTitle>
      <PricingGrid>
        <PricingCard>
          <PricingPlan>Básico</PricingPlan>
          <PricingPrice>R$ 49/mês</PricingPrice>
          <PricingFeatures>
            <PricingFeature>✔ Gestão de Vendas</PricingFeature>
            <PricingFeature>✔ Relatórios Básicos</PricingFeature>
            <PricingFeature>✔ Suporte via Email</PricingFeature>
          </PricingFeatures>
          <PricingButton href="#">Assinar</PricingButton>
        </PricingCard>
        <PricingCard>
          <PricingPlan>Profissional</PricingPlan>
          <PricingPrice>R$ 99/mês</PricingPrice>
          <PricingFeatures>
            <PricingFeature>✔ Tudo do Básico</PricingFeature>
            <PricingFeature>✔ Relatórios Avançados</PricingFeature>
            <PricingFeature>✔ Suporte Prioritário</PricingFeature>
          </PricingFeatures>
          <PricingButton href="#">Assinar</PricingButton>
        </PricingCard>
        <PricingCard>
          <PricingPlan>Premium</PricingPlan>
          <PricingPrice>R$ 199/mês</PricingPrice>
          <PricingFeatures>
            <PricingFeature>✔ Tudo do Profissional</PricingFeature>
            <PricingFeature>✔ Integração com APIs</PricingFeature>
            <PricingFeature>✔ Consultoria Especializada</PricingFeature>
          </PricingFeatures>
          <PricingButton href="#">Assinar</PricingButton>
        </PricingCard>
      </PricingGrid>
    </PricingContainer>
  )
}

export { Pricing }
