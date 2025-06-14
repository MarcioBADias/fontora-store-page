import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 120px auto 20px;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  margin: 15px 0;
  padding: 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  opacity: ${(props) => (props.isConfirmed ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem;
  border-bottom: ${(props) => (props.isExpanded ? '1px solid #eee' : 'none')};

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  span {
    color: #b83242;
    font-weight: bold;
  }
`

export const CardBody = styled.div`
  padding: 1.5rem;
`

export const OrderItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }
`

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 1rem;
  object-fit: cover;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  gap: 1rem;
`

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) =>
    props.variant === 'danger' ? '#dc3545' : '#28a745'};

  &:hover {
    opacity: 0.9;
  }
`
