import React, { useEffect, useState } from "react";
// Components
import { Container } from '../components/Checkout/checkout';
import { Back, Divider } from '../components/index';
import { ArrowBackRounded } from '@material-ui/icons';
// Orders
import Order from '../components/Order';
import { useCartValue } from "../providers/cart";
import { db } from "../config/firebase";

export default function Orders() {
  const [{ basket, user }, dispatch] = useCartValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
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
          <Order order={order} />
        ))}

      </div>
    </Container>
  )
}
