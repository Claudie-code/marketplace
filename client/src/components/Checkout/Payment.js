import React from 'react';
import { processPayment } from '../../lib/service';
import { useSelector } from 'react-redux';

function Payment({ isValid }) {
  const { items } = useSelector(state => state.cart);
  const processItem = (item) => ({
    currency: "usd",
    quantity: item.quantity,
    amount: item.price * 100,
    name: item.name
  });
  const order = items.map(item => processItem(item));
  console.log("order",order)
  return (<button className="btn btn-outline-primary btn-lg mt-3 btn-block" onClick={() => processPayment(order)} disabled={isValid}>Checkout</button>);
}
export default Payment;
