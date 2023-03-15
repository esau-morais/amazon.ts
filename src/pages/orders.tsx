import { useEffect, useState } from 'react'

// Components
import { ArrowBackRounded } from '@material-ui/icons'
import firebase from 'firebase'

import { Container } from '../components/Checkout/checkout'
import { Back, Divider } from '../components/index'
// Orders
import Order from '../components/Order'
import { db } from '../config/firebase'
import { useCartValue } from '../providers/cart'

const Orders = () => {
  const [{ user }] = useCartValue()
  const [orders, setOrders] = useState<firebase.firestore.DocumentData[]>([])

  useEffect(() => {
    if (user) {
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        ))
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <Container>
      <div className="checkoutProducts">
        <div>
          <Back to="/">
            <ArrowBackRounded />
          </Back>

          <h2>My orders</h2>
        </div>

        <Divider />

        {orders?.map(order => (
          <Order key={order.id} order={order} />
        ))}

      </div>
    </Container>
  )
}

export default Orders
