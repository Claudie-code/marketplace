import './cart.scss';
import CartTotal from './CartTotal'
import CartTable from './CartTable'

const Layout = ({ children }) => (
	<section className="cart__container section bd-grid">
		<main className="cart__main">
			<CartTable children={children} />
		</main>
		<aside className="col-md-3">
			<CartTotal />			
		</aside>
	</section>
)
export default Layout