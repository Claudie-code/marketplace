import CartFooter from './CartFooter';

const CartTable = ({ children}) => { 
    return (
        <>
            <table className="cart__table table table-borderless table-shopping-cart">
                <thead className="text-muted">
                    <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">Quantity</th>
                        <th scope="col" width="120">Price</th>
                        <th scope="col" className="text-right" width="200"> </th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
            <CartFooter />
        </>
    );
}
export default CartTable;