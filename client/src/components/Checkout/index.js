import React, { useEffect } from 'react'
import { useFormValidation } from '../../lib/hooks/useFormValidation';
import { useDispatch, useSelector } from "react-redux";
import Payment from './Payment'
import DeliveryBox from './DeliveryBox'
import { setDelivery } from '../../lib/state/actions/index';
import './checkout.scss';

const defaultValues = { 
	delivery: 'standard',
	address: ''
}

const options = ['Canada', 'Russia', 'United States', 'India', 'Afganistan', 'France']
const Checkout = () => { 
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);	
	const { first, last, email, city, country, gender } = user ?? {};
	const {
		formValues,
		validate,
		register,
		handleOnChange,
		isValid
	} = useFormValidation({ formName: "checkout", defaultValues: defaultValues });

	useEffect(() => {
		register(defaultValues);
	}, []);
	const {delivery, address} = formValues['checkout'] ?? {};

	useEffect(() => {
		validate(formValues['checkout'] ?? {});
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

				<div className="form__row">
					<input type="text" name="first" id="first" className="form__input" placeholder="First Name" value={first} onChange={handleOnChange} required/>
					<input type="text" name="last" id="last" className="form__input" placeholder="Last Name" value={last} onChange={handleOnChange} required/>
					{/* <Input.Text label="First name" name="first" onChange={handleOnChange} value={first}/>
					<Input.Text label="Last name" name="last"  onChange={handleOnChange} value={last}/> */}
				</div> 

				<div className="form__row">
					{/* <Input.Email label="Email" onChange={handleOnChange} col="6" value={email}/>	 */}
					<input type="email" name="email" id="email" className="form__input" placeholder="Email" value={email} onChange={handleOnChange} required/>
				</div> 
				<div className="form__row">
					{/* <Input.Select name='country' options={options}  label="Country" col="6" onChange={handleOnChange} value={country}/>
					<Input.Text label="City" name='city'onChange={handleOnChange} value={city} /> */}
					<input type="text" name="city" id="city" className="form__input" placeholder="City" value={city} onChange={handleOnChange} required/>
					<select name="country" id="country-select" value={country} onChange={handleOnChange}>
						<option value="">Country</option>
						{options.map(option => <option key={option}value={option.toLocaleLowerCase()}>{option}</option>)}
					</select>
				</div> 
					{/* <Input.TextArea label="Address" name="address" onChange={handleOnChange} />  */}
				<input type="text" name="address" id="address" className="form__input" placeholder="Address" value={address} onChange={handleOnChange} required/>
			</div> 
			<div className="form__row" style={{margin: "auto"}}>
				<Payment isValid={!isValid} />	
			</div>
		</div> 
	</section>
)}
export default Checkout