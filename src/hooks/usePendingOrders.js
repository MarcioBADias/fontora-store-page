import { useReducer, useEffect, useCallback } from 'react'
import { supabase } from '../services/supabase'

const initialState = {
  isLoading: true,
  error: null,
  orders: [],
  expandedOrders: {},
}

const pendingOrdersReducer = (state, action) => {
  if (action.type === 'FETCH_START') {
    return { ...state, isLoading: true, error: null }
  }
  if (action.type === 'FETCH_SUCCESS') {
    return { ...state, isLoading: false, orders: action.payload }
  }
  if (action.type === 'FETCH_ERROR') {
    return { ...state, isLoading: false, error: action.payload }
  }
  if (action.type === 'TOGGLE_EXPAND') {
    return {
      ...state,
      expandedOrders: {
        ...state.expandedOrders,
        [action.payload]: !state.expandedOrders[action.payload],
      },
    }
  }
  return state
}

export const usePendingOrders = () => {
  const [state, dispatch] = useReducer(pendingOrdersReducer, initialState)

  const fetchOrders = useCallback(async () => {
    dispatch({ type: 'FETCH_START' })
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*, outfit(*)')
        .eq('recall', false)
        .order('created_at', { ascending: true })

      if (error) throw error

      dispatch({ type: 'FETCH_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message })
      console.error('Erro ao buscar pedidos:', error)
    }
  }, [])

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  const confirmOrderGroup = async (ordersInGroup) => {
    const orderIds = ordersInGroup.map((p) => p.id)

    const { error } = await supabase
      .from('orders')
      .update({ is_confirmed: true })
      .in('id', orderIds)

    if (error) {
      alert(`Erro ao confirmar venda: ${error.message}`)
      return
    }

    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: orderIds })

    const firstOrder = ordersInGroup[0]
    const purchaserName = firstOrder.purchaser.split(' ')[0]
    const total = ordersInGroup.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    )
    const message = `Olá, ${purchaserName}! Seu pedido na Carmen Fontoura foi confirmado! Total: R$ ${total.toFixed(2)}.`
    const phone = firstOrder.contact?.replace(/\D/g, '')
    if (phone) {
      const url = `https://wa.me/55${phone}?text=${encodeURIComponent(message)}`
      window.open(url, '_blank')
    }
  }

  const returnOrderGroup = async (ordersInGroup) => {
    for (const order of ordersInGroup) {
      const { data: outfitData, error: fetchError } = await supabase
        .from('outfit')
        .select('quantity')
        .eq('id', order.outfit_id)
        .single()

      if (fetchError) {
        alert(`Erro ao buscar item para devolução: ${fetchError.message}`)
        return
      }

      const newQuantity = outfitData.quantity + order.quantity

      await supabase
        .from('outfit')
        .update({ quantity: newQuantity })
        .eq('id', order.outfit_id)
    }

    const orderIds = ordersInGroup.map((p) => p.id)
    const { error: updateError } = await supabase
      .from('orders')
      .update({ recall: true, is_confirmed: false })
      .in('id', orderIds)

    if (updateError) {
      alert(`Erro ao devolver pedido: ${updateError.message}`)
      return
    }

    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: orderIds })
    alert('Pedido devolvido com sucesso e estoque atualizado.')
  }

  const toggleOrderExpand = (key) => {
    dispatch({ type: 'TOGGLE_EXPAND', payload: key })
  }

  return {
    state,
    confirmOrderGroup,
    returnOrderGroup,
    toggleOrderExpand,
  }
}
