import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import * as Input from '../Input';
import { useFormValidation } from '../../../lib/hooks/useFormValidation';
import useAuthentication from '../../../lib/hooks/useAuthentication';
import { useDispatch, useSelector } from "react-redux";
import Button from '../../Button';

const Alert = ({ isVisible }) => (
	isVisible &&
	<div className="alert alert-info mt-3">
		<p className="icontext"><i className="icon text-primary fa fa-thumbs-up"></i>User successfully created</p>
    </div>
)
const ErrorMessage = ({ error }) => (
	error && 
	<div className="alert alert-danger mt-3">
		<p className="icontext" style={{ color: 'crimson' }}><i className="icon text-danger fas fa-exclamation-circle"></i> {' '}{error?.error}</p>
    </div>
)

const defaultValues = {
	first: '' ,
	last: '' ,
	email: '' ,
	gender: '' ,
	city: '' ,
	password: '' ,
	confirm_password: '' 
};

const options = ['Uzbekistan', 'Russia', 'United States', 'India', 'Afganistan']
const Register = () => { 
	const history = useHistory();
	const dispatch = useDispatch();
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
		handleUserRegistration(newUser).then((user) => {
			console.log('user succesfully created', user)
			user && setTimeout(() => window.location.reload(), 2000);
		});
	};
	return (
		<div className="form">
				<h3 className="card-title">Sign up</h3>
				<ErrorMessage error={error} />
				<Alert isVisible={!!user} />
				<form className="form__container" onSubmit={handleOnSubmit}>
					<div className="form__group">
						<input type="radio" name="gender" id="male" placeholder="Male" value={gender} onChange={handleOnChange}/>
						<label for="male">Male</label>
						<input type="radio" name="gender" id="female" placeholder="Female" value={gender} onChange={handleOnChange}/>
						<label for="female">Female</label>
					</div> 
					<div className="form__row">
						<input type="text" name="first" id="first" className="form__input" placeholder="First Name" value={first} onChange={handleOnChange}/>
						<input type="text" name="last" id="last" className="form__input" placeholder="Last Name" value={last} onChange={handleOnChange}/>
					</div> 
					<div className="form__group">
						<input type="email" name="email" id="email" className="form__input" placeholder="Email" value={email} onChange={handleOnChange}/>
					</div> 
					<div className="form__row">
						<input type="text" name="city" id="city" className="form__input" placeholder="City" value={city} onChange={handleOnChange}/>
						<select name="country" id="country-select">
							<option value="">Country</option>
							{options.map(option => <option value={option.toLocaleLowerCase()}>{option}</option>)}
						</select>
					</div> 	
					
					<div className="form__row">	
						<input type="password" name="password" id="password" className="form__input" placeholder="Create password" value={password} onChange={handleOnChange} />
						<input type="password" name="confirm_password" id="confirm_password" className="form__input" placeholder="Repeat password" value={confirm_password} onChange={handleOnChange} />
					</div>
					<div className="form-group">
						<Button type="submit" disabled={!isValid}>Register</Button>
					</div>              
				</form>

		</div>
	);
}
export default Register