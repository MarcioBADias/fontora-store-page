import {
  TestimonialCard,
  TestimonialsContainer,
  TestimonialsWrapper,
} from './style'

const Testimonials = () => {
  const testimonialsList = [
    {
      name: 'João Silva',
      title: 'Empresário',
      testimonial:
        'O sistema TI Automacoes transformou a maneira como gerenciamos nossas vendas. A automação trouxe agilidade e segurança para o meu negócio.',
    },
    {
      name: 'Maria Oliveira',
      title: 'Gerente de Vendas',
      testimonial:
        'A ferramenta tem tudo o que precisamos para otimizar os processos de vendas. Ela é intuitiva, fácil de usar e extremamente eficiente.',
    },
    {
      name: 'Carlos Pereira',
      title: 'Proprietário de Restaurante',
      testimonial:
        'Com o TI Automacoes, conseguimos melhorar a gestão de nosso estoque e as vendas de maneira eficaz, sem complicações.',
    },
  ]

  return (
    <TestimonialsContainer>
      <h2>O que nossos clientes dizem</h2>
      <TestimonialsWrapper>
        {testimonialsList.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <p>"{testimonial.testimonial}"</p>
            <h3>{testimonial.name}</h3>
            <span>{testimonial.title}</span>
          </TestimonialCard>
        ))}
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials
