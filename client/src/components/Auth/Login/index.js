import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import * as Input from '../Input'
import { useFormValidation } from '../../../lib/hooks/useFormValidation';
import useAuthentication from '../../../lib/hooks/useAuthentication';
import { useDispatch, useSelector } from "react-redux";
import Button from '../../Button';

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
	email: 'sandy@gmail.com' ,
	password: '' ,
}
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
		<>
			<div className="card mx-auto">
				<div className="card-body">
					<h4 className="card-title mb-4">Sign in</h4>
					<ErrorMessage error={error} />
					<Alert isVisible={!!user} />
					<form name="login" onSubmit={handleOnSubmit}>
						{/* 
						<a href="#" className="btn btn-facebook btn-block mb-2"> <i className="fab fa-facebook-f"></i> &nbsp  Sign in with Facebook</a>
						<a href="#" className="btn btn-google btn-block mb-4"> <i className="fab fa-google"></i> &nbsp  Sign in with Google</a> 
						*/}
						<div className="form__group" >
							<input name="email" id="email" className="form__style" placeholder="Email" value={email} onChange={handleOnChange}/>
						</div>
						<div className="form__group">
							<input name="password" id="password" className="form__style" placeholder="Password" value={password} onChange={handleOnChange} />
						</div> 
						<div className="form__group">
							<Button type="submit" value="Login" disabled={!isValid}>Login</Button>
						</div>  
					</form>
				</div>
			</div> 
			<p className="text-center mt-4">Don't have account? <Link to='/register'>Sign Up</Link></p>
		</>
	);
}  

export default Login;