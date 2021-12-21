import React from 'react';
import { processPayment } from '../../lib/service';
import { useSelector } from 'react-redux';
import { selectDeliveryCost } from '../../lib/state/selectors';

function Payment({ isValid }) {
  const { items } = useSelector(state => state.cart);
  const shippingCost = useSelector(selectDeliveryCost);
  const shipping = {
    currency: "usd",
    quantity: 1,
    amount: shippingCost * 100,
    name: "Shipping Cost"
  };
  const processItem = (item) => ({
    currency: "usd",
    quantity: item.quantity,
    amount: item.price * 100,
    name: item.name
  });
  const order = items.map(item => processItem(item));
  const orderWithShipping = order.concat(shipping);

  return (
    <button 
      className="btn btn-outline-primary btn-lg mt-3 btn-block" 
      onClick={() => processPayment(orderWithShipping)} 
      disabled={isValid}
    >
        Checkout
    </button>);
}
export default Payment;
