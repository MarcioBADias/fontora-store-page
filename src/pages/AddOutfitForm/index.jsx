import { useAddOutfitForm } from '../../hooks/useAddOutfitForm'
import { Container, Form, Label, Input, Button, Message } from './style'

const AddOutfitForm = () => {
  const { state, dispatch, handleSubmit } = useAddOutfitForm()

  const handleFieldChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.id,
      value: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: 'imageFile',
      value: e.target.files[0],
    })
  }

  return (
    <Container>
      <h1>Cadastrar Nova Peça de Roupa</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome da Peça</Label>
        <Input
          type="text"
          id="name"
          value={state.name}
          onChange={handleFieldChange}
        />

        <Label htmlFor="group">Grupo/Categoria</Label>
        <Input
          type="text"
          id="group"
          placeholder="Ex: Vestidos, Calças, Blusas"
          value={state.group}
          onChange={handleFieldChange}
        />

        <Label htmlFor="price">Valor (ex: 189.90)</Label>
        <Input
          type="number"
          id="price"
          step="0.01"
          value={state.price}
          onChange={handleFieldChange}
        />

        <Label htmlFor="quantity">Quantidade</Label>
        <Input
          type="number"
          id="quantity"
          value={state.quantity}
          onChange={handleFieldChange}
        />

        <Label htmlFor="imageFile">Imagem da Peça</Label>
        <Input
          type="file"
          id="imageFile"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />

        <Button type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Cadastrando...' : 'Cadastrar Peça'}
        </Button>

        {state.message && (
          <Message type={state.message.type}>{state.message.text}</Message>
        )}
      </Form>
    </Container>
  )
}

export { AddOutfitForm }
