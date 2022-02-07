import React from 'react';  
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../../lib/state/actions';

const Row = ({ _id, name, price, quantity, image}) => { 
    const dispatch = useDispatch();
    const updateCartAction = (event) => { 
        dispatch(updateCart(_id, event.target.value));
    };
    const removeFromCartAction = (event) => {
        event.preventDefault();
        dispatch(removeFromCart(_id));
    };

    return (
        <tr key={_id}>
            <td>
                <figure >
                    <div ><img src={image}  /></div>
                    <figcaption >
                        <a href="#" >{ name }</a>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select value={quantity} onChange={updateCartAction}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select> 
            </td>
            <td>    
                <div> 
                    <span>${price.$numberDecimal * quantity}</span> 
                </div>
            </td>
            <td> 
                <a href="" onClick={removeFromCartAction}>Remove</a>
            </td>
        </tr>
    );
}
export default Row