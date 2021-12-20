import React, { useEffect } from 'react'
import { useFormValidation } from '../../lib/hooks/useFormValidation';
import { useDispatch, useSelector } from "react-redux";
import * as Input from '../Auth/Input'
import Payment from './Payment'
import DeliveryBox from './DeliveryBox'
import { setDelivery } from '../../lib/state/actions/index';

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
	<>
	<section className="section-content padding-y" style={{ margin: '100px auto', maxWidth: '720px' }}>
		<div className="container" >

			<div className="card mb-4">
				<div className="card-body">
				<h4 className="card-title mb-3">Delivery info</h4>

				<div className="form-row">
					<div className="form-group col-sm-6">
						<DeliveryBox title="standard" message="Free by airline within 20 days" onChange={(event) => handleOnchangeDelivery(event, "standard")} value={delivery} />
					</div>
					<div className="form-group col-sm-6">
						<DeliveryBox title="fast" message="Extra 20$ will be charged" onChange={(event) => handleOnchangeDelivery(event, "fast")} value={delivery}/>
					</div>
				</div>

				<div className="form-row">
					<Input.Text label="First name" name="first" onChange={handleOnChange} value={first}/>
					<Input.Text label="Last name" name="last"  onChange={handleOnChange} value={last}/>
				</div> 

				<div className="form-row">
					<Input.Email label="Email" onChange={handleOnChange} col="6" value={email}/>	
				</div> 
				<div className="form-row">
					<Input.Select name='country' options={options}  label="Country" col="6" onChange={handleOnChange} value={country}/>
					<Input.Text label="City" name='city'onChange={handleOnChange} value={city} />
				</div> 
					<Input.TextArea label="Address" name="address" onChange={handleOnChange} /> 
				</div> 
				<div className="form-row" style={{padding: '0 25px 30px'}}>
					<Payment isValid={!isValid} />	
				</div>
		</div> 
	</div>
</section>
</>
)}
export default Checkout