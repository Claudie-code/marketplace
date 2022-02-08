import React from 'react';  
import { Link } from "react-router-dom";
import ButtonNav from '../ButtonNav';

const CartFooter = () => (
    <div className='cart-footer__container'>
        <ButtonNav href="/shop" title="link shop">Continue shopping</ButtonNav>  
    </div>
)
export default CartFooter