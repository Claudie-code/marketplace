import Link from '../Link';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectDeliveryCost } from "../../lib/state/selectors";

const CartTotal = () => { 
	const total = useSelector(selectCartTotal);
	const deliveryCost = useSelector(selectDeliveryCost);
  return (
   <>
		<div className="card mb-3">
			<div className="card-body">
				<div className="cart__success">
					<p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
				</div>
				<form>
					<div className="form-group">
						<label>Have coupon?</label>
						<div className="input-group">
							<input type="text" className="form-control" name="" placeholder="Coupon code" />
							<span className="input-group-append"> 
								<button aria-label='apply coupon code' className="btn btn-primary">Apply</button>
							</span>
						</div>
					</div>
				</form>
			</div> 
		</div>  
		<div className="card">
			<div className="card-body">
					<dl className="dlist-align">
					  <dt>SubTotal:</dt>
                        <dd className="text-right">${total}</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Delivery:</dt>
						<dd className="text-right">${deliveryCost}</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Discount:</dt>
					  <dd className="text-right">---</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Total:</dt>
					  <dd className="text-right  h5"><strong>${total + deliveryCost}</strong></dd>
					</dl>
					<dl>
						<dt className="text-center"><Link href="/checkout" title="link chekout">Make Purchase</Link> </dt>
					</dl>
					<hr />
					<p className="cart__payments">
						<img src="images/misc/payments.png" height="38" width='226' alt="payment methods" />
					</p>
					
			</div> 
		</div>  
    </>
)}
export default CartTotal