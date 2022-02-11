import React, { useEffect } from 'react'
import { useFormValidation } from '../../lib/hooks/useFormValidation';
import { useDispatch, useSelector } from "react-redux";
import Payment from './Payment'
import DeliveryBox from './DeliveryBox'
import { setDelivery } from '../../lib/state/actions/index';
import './checkout.scss';

const options = ['France', 'Italy', 'Spain', 'Belgium'];
const Checkout = () => { 
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);	
	const defaultValues = { 
		delivery: 'standard',
        first: user?.first || "",
        last: user?.last || "",
        email: user?.email || "",
        city: user?.city || "",
		country: user?.country || "",
		gender: user?.gender || "",
        address: user?.address || ""
    };
	const {
		formValues,
		validate,
		handleOnChange,
		isValid
	} = useFormValidation({ formName: "checkout", defaultValues: defaultValues });

	const { 
		first, last, email, city, country, address, gender, delivery
	} = formValues['checkout'] ?? {};

	useEffect(() => {
		validate(formValues['checkout'] ?? {});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formValues]);

	const handleOnchangeDelivery = (event, value) => {
		handleOnChange(event, value);
		dispatch(setDelivery(value));
	};

	return (
	<section className="section checkout">
		<div className="card checkout__container">
			<div className="checkout__body">
				<h3 className="card-title mb-3">Delivery info</h3>

				<div className="form__row checkout__delivery">
					<div className="form-group col-sm-6">
						<DeliveryBox title="standard" message="Free by airline within 20 days" onChange={(event) => handleOnchangeDelivery(event, "standard")} value={delivery} />
					</div>
					<div className="form-group col-sm-6">
						<DeliveryBox title="fast" message="Extra 20$ will be charged" onChange={(event) => handleOnchangeDelivery(event, "fast")} value={delivery}/>
					</div>
				</div>
					
				<div className="form__group">
					<input type="radio" name="gender" id="male" value="male" onChange={handleOnChange} checked={gender === "male"} required/>
					<label htmlFor="male">Male</label>
					<input type="radio" name="gender" id="female" value="female" onChange={handleOnChange} checked={gender === "female"} required/>
					<label htmlFor="female">Female</label>
				</div> 

				<div className="form__row">
					<input type="text" name="first" id="first" className="form__input" placeholder="First Name" value={first} onChange={handleOnChange} required/>
					<input type="text" name="last" id="last" className="form__input" placeholder="Last Name" value={last} onChange={handleOnChange} required/>
				</div> 

				<div className="form__row">
					<input type="email" name="email" className="form__input" placeholder="Email" value={email} onChange={handleOnChange} required/>
				</div> 
				<div className="form__row">
					<input type="text" name="city" id="city" className="form__input" placeholder="City" value={city} onChange={handleOnChange} required/>
					<select name="country" id="country-select" value={country} onChange={handleOnChange}>
						<option value="">Country</option>
						{options.map(option => <option key={option}value={option.toLocaleLowerCase()}>{option}</option>)}
					</select>
				</div> 
				<input type="text" name="address" id="address" className="form__input" placeholder="Address" value={address} onChange={handleOnChange} required/>
			</div> 
			<div className="form__row" style={{margin: "auto"}}>
				<Payment isValid={!isValid} formValues={formValues} />	
			</div>
		</div> 
	</section>
)}
export default Checkout