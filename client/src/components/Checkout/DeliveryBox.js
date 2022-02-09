import React from 'react';  

const DeliveryBox = ({ value, title, message, onChange }) => { 
    const isSelected = title === value
    return(
        <label>
            <input type="radio" name="delivery" value={value} onChange={onChange} checked={isSelected}/>
            <h4 className="title">{title} delivery</h4>
            <p className="text-muted">{ message }</p>
        </label> 
    );
}
export default DeliveryBox