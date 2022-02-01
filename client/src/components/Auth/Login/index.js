import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useFormValidation } from '../../../lib/hooks/useFormValidation';
import useAuthentication from '../../../lib/hooks/useAuthentication';
import { useDispatch, useSelector } from "react-redux";
import Button from '../../Button';
import './login.scss';

const Alert = ({ isVisible }) => (
	isVisible &&
	<div className="alert alert-info mt-3">
		<p className="icontext"><i className="icon text-primary fa fa-thumbs-up"></i>User successfully connected</p>
    </div>
)
const ErrorMessage = ({ error }) => (
	error && 
	<div className="alert alert-danger mt-3">
		<p className="icontext]" style={{ color: 'crimson' }}><i className="icon text-danger fas fa-exclamation-circle"></i> {' '}{error?.error}</p>
    </div>
)

const defaultValues = {
	email: '' ,
	password: '' ,
};

const Login = () => { 
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, error } = useSelector(state => state.user);
  const { handleUserLogin } = useAuthentication(dispatch);
  const {
		formValues,
		validate,
		register,
		handleOnChange,
		isValid
	} = useFormValidation({ formName: "login", defaultValues: defaultValues });
  const { 
		email, password
	} = formValues['login'] ?? {};

  useEffect(() => {
		register(defaultValues);
	}, []);

	useEffect(() => {
		validate(formValues['login'] ?? {});
	}, [formValues]);

  	const handleOnSubmit = (event) => {
		event.preventDefault();
		handleUserLogin(email, password)
		.then(currentUser => {
			console.log(currentUser)
			currentUser && setTimeout(() => history.push('/'), 2000);
		});
		
	};

	return(
		<div className="form">
			<h3>Sign in</h3>
			<ErrorMessage error={error} />
			<Alert isVisible={!!user} />
			<form className="form__container" name="login" onSubmit={handleOnSubmit}>
				<div className="form__group" >
					<input type="email" name="email" id="email" className="form__input" placeholder="Email" value={email} onChange={handleOnChange}/>
				</div>
				<div className="form__group">
					<input type="password" name="password" id="password" className="form__input" placeholder="Password" value={password} onChange={handleOnChange} />
				</div> 
				<div className="form__submit">
					<Button type="submit" disabled={!isValid}>Login</Button>
				</div>  
			</form>
		</div>
	);
}  

export default Login;