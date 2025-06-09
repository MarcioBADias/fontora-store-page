import styled from 'styled-components'

export const PricingContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #f9f9f9;
`

export const PricingTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto;
`

export const PricingCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const PricingPlan = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`

export const PricingPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`

export const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
`

export const PricingFeature = styled.li`
  font-size: 16px;
  color: #555;
`

export const PricingButton = styled.a`
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #333;
  }
`
