import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: 120px auto 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Label = styled.label`
  font-weight: bold;
  color: #333;
`

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &[type='file'] {
    border: none;
    background-color: #f9f9f9;
  }
`

export const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
`

export const Button = styled.button`
  background-color: #222;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #b83242;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

export const Message = styled.p`
  padding: 1rem;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  background-color: ${(props) =>
    props.type === 'success' ? '#28a745' : '#dc3545'};
`
