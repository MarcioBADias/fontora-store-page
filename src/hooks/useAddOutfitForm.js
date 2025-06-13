import { useReducer } from 'react'
import { supabase } from '../services/supabase'

const initialState = {
  name: '',
  price: '',
  quantity: '',
  group: '',
  imageFile: null,
  isLoading: false,
  message: null,
}

const addFormReducer = (state, action) => {
  if (action.type === 'SET_FIELD') {
    return {
      ...state,
      [action.field]: action.value,
    }
  }
  if (action.type === 'SUBMIT_START') {
    return {
      ...state,
      isLoading: true,
      message: null,
    }
  }
  if (action.type === 'SUBMIT_SUCCESS') {
    return {
      ...initialState,
      message: { type: 'success', text: action.payload },
    }
  }
  if (action.type === 'SUBMIT_ERROR') {
    return {
      ...state,
      isLoading: false,
      message: { type: 'error', text: action.payload },
    }
  }
  return state
}

export const useAddOutfitForm = () => {
  const [state, dispatch] = useReducer(addFormReducer, initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch({ type: 'SUBMIT_START' })

    const { name, price, quantity, group, imageFile } = state

    if (!name || !price || !quantity || !group || !imageFile) {
      dispatch({
        type: 'SUBMIT_ERROR',
        payload: 'Por favor, preencha todos os campos e selecione uma imagem.',
      })
      return
    }

    try {
      const fileName = `${Date.now()}_${imageFile.name}`
      const filePath = `public/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('outfits-images')
        .upload(filePath, imageFile)

      if (uploadError) throw uploadError

      const { data: urlData } = supabase.storage
        .from('outfits-images')
        .getPublicUrl(filePath)

      const { error: insertError } = await supabase.from('outfit').insert([
        {
          name,
          price: parseFloat(price),
          quantity: parseInt(quantity, 10),
          group,
          urlImage: urlData.publicUrl,
        },
      ])

      if (insertError) throw insertError

      dispatch({
        type: 'SUBMIT_SUCCESS',
        payload: 'Peça cadastrada com sucesso!',
      })
      event.target.reset()
    } catch (error) {
      console.error('Erro ao cadastrar peça:', error)
      dispatch({
        type: 'SUBMIT_ERROR',
        payload: `Ocorreu um erro: ${error.message}`,
      })
    }
  }

  return { state, dispatch, handleSubmit }
}
