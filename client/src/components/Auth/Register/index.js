import React, { useEffect, useState } from 'react';
import { useFormValidation } from '../../../lib/hooks/useFormValidation';
import useAuthentication from '../../../lib/hooks/useAuthentication';
import { useDispatch, useSelector } from "react-redux";
import Button from '../../Button';

const Alert = ({ isVisible }) => (
	isVisible &&
	<div className="alert alert-info mt-3">
		<p className="icontext"><i className="icon text-primary fa fa-thumbs-up"></i>{' '}User successfully created</p>
    </div>
);

const ErrorMessage = ({ error }) => (
	error && 
	<div className="alert alert-danger mt-3">
		<p className="icontext" style={{ color: 'crimson' }}><i className="icon text-danger fas fa-exclamation-circle"></i> {' '}{error?.error}</p>
    </div>
);

const ConfirmEmail = ({ message }) => (
	message &&
	<div className="alert alert-info mt-3">
		<p className="icontext"><i className="icon text-primary fa fa-thumbs-up"></i>{message}</p>
    </div>
);

const defaultValues = {
	first: '' ,
	last: '' ,
	email: '' ,
	gender: '' ,
	city: '' ,
	country: '',
	password: '' ,
	confirm_password: '' 
};

const options = ['France', 'Italy', 'Spain', 'Belgium']
const Register = () => { 
	const dispatch = useDispatch();
	const [ messageConfirmEmail, setMessageConfirmEmail ] = useState("");
	const { user, error } = useSelector(state => state.user);
	const { handleUserRegistration } = useAuthentication(dispatch);
	const {
		formValues,
		validate,
		register,
		handleOnChange,
		isValid
	} = useFormValidation({ formName: "register", defaultValues: defaultValues });
	const { 
		first, last, email, city, country, gender, password, confirm_password 
	} = formValues['register'] ?? {};

	useEffect(() => {
		register(defaultValues);
	}, []);

	useEffect(() => {
		validate(formValues['register'] ?? {});
	}, [formValues]);

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const newUser = {
			first, 
			last, 
			email, 
			city, 
			country, 
			gender, 
			password, 
			confirm_password
		};
		handleUserRegistration(newUser).then((response) => {
			setMessageConfirmEmail(response)
		}).catch((error) => console.log('error creating user :', error));
	};
	return (
		<div className="form">
				<h3 className="card-title">Sign up</h3>
				<ErrorMessage error={error} />
				<Alert isVisible={!!user} />
				<ConfirmEmail message={messageConfirmEmail} />
				<form className="form__container" onSubmit={handleOnSubmit}>
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
					<div className="form__group">
						<input type="email" name="email" id="email" className="form__input" placeholder="Email" value={email} onChange={handleOnChange} required/>
					</div> 
					<div className="form__row">
						<input type="text" name="city" id="city" className="form__input" placeholder="City" value={city} onChange={handleOnChange} required/>
						<select name="country" id="country-select" value={country} onChange={handleOnChange}>
							<option value="">Country</option>
							{options.map(option => 
								<option key={option} value={option.toLocaleLowerCase()}>{option}</option>
							)}
						</select>
					</div> 	
					
					<div className="form__row">	
						<input type="password" name="password" id="password" className="form__input" placeholder="Create password" value={password} onChange={handleOnChange} required />
						<input type="password" name="confirm_password" id="confirm_password" className="form__input" placeholder="Repeat password" value={confirm_password} onChange={handleOnChange} required />
					</div>
					<div className="form-group">
						<Button type="submit" disabled={!isValid}>Register</Button>
					</div>              
				</form>

		</div>
	);
}
export default Register