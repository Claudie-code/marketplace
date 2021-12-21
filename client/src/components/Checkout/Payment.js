
import React from 'react';
import { processPayment } from '../../lib/service';

function Payment({ isValid }) {
  return (<button className="btn btn-outline-primary btn-lg mt-3 btn-block" onClick={() => processPayment({})} disabled={isValid}>Checkout</button>);
}
export default Payment;
