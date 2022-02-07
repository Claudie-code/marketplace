import { useSelector } from 'react-redux';
import Layout from './Layout';
import Row from './Row';

const Cart = () => { 
	const { items } = useSelector((state) => ({...state.cart }));

	return (
		<>
			<Layout>
					{items.length === 0 && 
						<p className="cart__empty">
							Your Cart is Empty
						</p>
					}
					{items.map(item => <Row key={item._id} {...item} />)}
			</Layout>
		</>
	);
};

export default Cart;