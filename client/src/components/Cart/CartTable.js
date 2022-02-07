import CartFooter from './CartFooter';

const CartTable = ({ children}) => { 
    return (
        <>
            <div className="card-table__container">
                <table className="table table-borderless table-shopping-cart">
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
            </div>
        </>
    );
}
export default CartTable;