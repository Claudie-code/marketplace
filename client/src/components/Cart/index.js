import { useSelector } from 'react-redux';
import Layout from './Layout';
import Row from './Row';

const Cart = () => { 
	const { items } = useSelector((state) => ({...state.cart }));

	return (
		<>
			<Layout>
					{items.length === 0 && 
						<tr className="cart__empty">
							<td>
								Your Cart is Empty
							</td>
						</tr>
					}
					{items.map(item => <Row key={item._id} {...item} />)}
			</Layout>
		</>
	);
};

export default Cart;