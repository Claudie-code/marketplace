import { processPayment } from '../../lib/service';
import { useSelector } from 'react-redux';
import { selectDeliveryCost } from '../../lib/state/selectors';
import Button from '../Button';

function Payment({ isValid, formValues }) {
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
    amount: item.price.$numberDecimal * 100,
    name: item.name,
    images: [item.image]
  });
  const order = items.map(item => processItem(item));
  const orderWithShipping = order.concat(shipping);
  const orderWithAddress = {
    line_items: orderWithShipping,
    address: formValues
  };

  const handleClick = () => {
    localStorage.setItem('orderAddress', formValues);
    processPayment(orderWithAddress)
  }

  return (
    <Button
      onClick={() => handleClick()} 
      disabled={isValid}
    >
        Checkout
    </Button>
  );
}
export default Payment;
