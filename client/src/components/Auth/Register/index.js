import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import * as Input from '../Input';
import { useFormValidation } from '../../../lib/hooks/useFormValidation';
import useAuthentication from '../../../lib/hooks/useAuthentication';
import { useDispatch, useSelector } from "react-redux";

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
	first: 'sandy' ,
	last: 'last' ,
	email: 'sandy@gmail.com' ,
	gender: 'Female' ,
	city: 'city' ,
	password: 'test12345' ,
	confirm_password: 'test12345' 
}
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
			user && setTimeout(() => history.push('/'), 2000);
		});
	};
	return (
	<>
    <div className="card mx-auto" style={{maxWidth:'520px', marginTop:'140px'}} >
      <article className="card-body">
			<header className="mb-4"><h4 className="card-title">Sign up</h4></header>
			{/* feedback et message d'erreurs */}
			<ErrorMessage error={error} />
			<Alert isVisible={!!user} />
 			<form name="register" onSubmit={handleOnSubmit}>
				<div className="form-row">
					<Input.Text label="First Name" name='first' value={first} onChange={handleOnChange} />
					<Input.Text label="Label Name" name='last'  value={last} onChange={handleOnChange} /> 
				</div> 
				<div className="form-group">
					<Input.Email label="Email" style={{padding: 0}} value={email} onChange={handleOnChange}/>
				</div> 
				<div className="form-group">
					<Input.Radio name="gender" label="Male" value={gender} onChange={handleOnChange} />
					<Input.Radio name="gender" label="Female" value={gender} onChange={handleOnChange} />
				</div> 
				<div className="form-row">
					<Input.Text name='city' label="City" value={city} onChange={handleOnChange} col="6"  />
					<Input.Select name='country' options={options} label="Country" col="6" value={country} onChange={handleOnChange}/>
				</div> 	
				
				<div className="form-row">	
					<Input.Password label="Create password"  style={{padding: 0}} col="6" value={password} onChange={handleOnChange} />
					<Input.ConfirmPassword label="Repeat password" style={{padding: 0}} col="6" value={confirm_password} onChange={handleOnChange} />
				</div>
				<div className="form-group">
					<Input.Submit 
						classNamees="btn-primary btn-block" 
						title="Register" 
						disabled={!isValid}
					/> 
			    </div>              
			</form>
		</article>
    </div>
    <p className="text-center mt-4">Have an account? <Link to='/login'>Log In</Link></p>
    <br /><br /><br />
</>
)}
export default Register