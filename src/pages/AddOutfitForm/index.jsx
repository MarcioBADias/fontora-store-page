import { useState } from 'react'
import { supabase } from '../../services/supabase'
import { Container, Form, Label, Input, Button, Message } from './style'

const AddOutfitForm = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [group, setGroup] = useState('')
  const [imageFile, setImageFile] = useState(null)

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    if (!name || !price || !quantity || !group || !imageFile) {
      setMessage({
        type: 'error',
        text: 'Por favor, preencha todos os campos e selecione uma imagem.',
      })
      setIsLoading(false)
      return
    }

    try {
      const fileName = `${Date.now()}_${imageFile.name}`
      const filePath = `public/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('outfits-images')
        .upload(filePath, imageFile)

      if (uploadError) {
        throw uploadError
      }

      const { data: urlData } = supabase.storage
        .from('outfits-images')
        .getPublicUrl(filePath)

      const publicUrl = urlData.publicUrl

      const { error: insertError } = await supabase.from('outfit').insert([
        {
          name,
          price: parseFloat(price),
          quantity: parseInt(quantity, 10),
          group,
          urlImage: publicUrl,
        },
      ])

      if (insertError) {
        throw insertError
      }

      setMessage({ type: 'success', text: 'Peça cadastrada com sucesso!' })
      setName('')
      setPrice('')
      setQuantity('')
      setGroup('')
      setImageFile(null)
      e.target.reset()
    } catch (error) {
      console.error('Erro ao cadastrar peça:', error)
      setMessage({ type: 'error', text: `Ocorreu um erro: ${error.message}` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <h1>Cadastrar Nova Peça de Roupa</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome da Peça</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label htmlFor="group">Grupo/Categoria</Label>
        <Input
          type="text"
          id="group"
          placeholder="Ex: Vestidos, Calças, Blusas"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />

        <Label htmlFor="price">Valor (ex: 189.90)</Label>
        <Input
          type="number"
          id="price"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Label htmlFor="quantity">Quantidade</Label>
        <Input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <Label htmlFor="imageFile">Imagem da Peça</Label>
        <Input
          type="file"
          id="imageFile"
          accept="image/png, image/jpeg"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Cadastrando...' : 'Cadastrar Peça'}
        </Button>

        {message && <Message type={message.type}>{message.text}</Message>}
      </Form>
    </Container>
  )
}

export { AddOutfitForm }
