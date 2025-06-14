import { useMemo } from 'react'
import { usePendingOrders } from '../../hooks/usePendingOrders'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import {
  Container,
  Title,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  OrderItem,
  ItemImage,
  Button,
} from './style'

const PendingOrders = () => {
  const { state, confirmOrderGroup, returnOrderGroup, toggleOrderExpand } =
    usePendingOrders()

  const groupedOrders = useMemo(() => {
    const groups = {}
    state.orders.forEach((order) => {
      const purchaserName = order.purchaser || 'Desconhecido'
      const orderDate = new Date(order.created_at)
      const groupKey = `${purchaserName}-${orderDate.toLocaleString()}`

      if (!groups[groupKey]) {
        groups[groupKey] = []
      }
      groups[groupKey].push(order)
    })
    return groups
  }, [state.orders])

  if (state.isLoading) {
    return (
      <Container>
        <p>Carregando pedidos...</p>
      </Container>
    )
  }

  if (state.error) {
    return (
      <Container>
        <p>Erro ao carregar pedidos: {state.error}</p>
      </Container>
    )
  }

  return (
    <Container>
      <Title>Pedidos Pendentes</Title>
      {Object.keys(groupedOrders).length === 0 ? (
        <p>Não há pedidos pendentes.</p>
      ) : (
        Object.entries(groupedOrders).map(([key, ordersInGroup]) => {
          const totalPedido = ordersInGroup.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0,
          )
          const isExpanded = !!state.expandedOrders[key]
          const purchaserName = ordersInGroup[0].purchaser

          return (
            <Card key={key}>
              <CardHeader
                onClick={() => toggleOrderExpand(key)}
                isExpanded={isExpanded}
              >
                <h2>
                  Pedido de <span>{purchaserName}</span>
                </h2>
                {isExpanded ? (
                  <IoIosArrowUp size={24} />
                ) : (
                  <IoIosArrowDown size={24} />
                )}
              </CardHeader>

              {isExpanded && (
                <CardBody>
                  <ul>
                    {ordersInGroup.map((order) => (
                      <OrderItem key={order.id}>
                        <ItemImage
                          src={order.outfit.urlImage}
                          alt={order.outfit.name}
                        />
                        <div>
                          <p>
                            <strong>Peça:</strong> {order.outfit.name}
                          </p>
                          <p>
                            <strong>Qtd:</strong> {order.quantity}
                          </p>
                          <p>
                            <strong>Subtotal:</strong> R${' '}
                            {(order.price * order.quantity).toFixed(2)}
                          </p>
                        </div>
                      </OrderItem>
                    ))}
                  </ul>
                  <h4>Total do Pedido: R$ {totalPedido.toFixed(2)}</h4>
                  <CardFooter>
                    <Button
                      variant="danger"
                      onClick={() => returnOrderGroup(ordersInGroup)}
                    >
                      Devolver Pedido
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => confirmOrderGroup(ordersInGroup)}
                    >
                      Confirmar Venda
                    </Button>
                  </CardFooter>
                </CardBody>
              )}
            </Card>
          )
        })
      )}
    </Container>
  )
}

export { PendingOrders }
