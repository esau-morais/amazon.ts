
// Moment → Date formatter
import moment from 'moment'

// Components
import { Divider } from '../index'
import CheckoutOrder from './order'

const Order = ({ order }: { order: any }) => {
  return (
    <>
      <span>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</span>
      {order.data.basket?.map((item: any) => (
        <CheckoutOrder
          key={item.id}
          product={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
      <Divider />
    </>
  )
}

export default Order
