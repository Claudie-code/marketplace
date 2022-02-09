import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormValidation } from "../../lib/hooks/useFormValidation";
import Button from "../Button";

const defaultValues = { 
	address: ''
};

function Account() {
    const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);	
	const { first, last, email, city, country, gender } = user ?? {};
	const {
		formValues,
		validate,
		register,
		handleOnChange,
		isValid
	} = useFormValidation({ formName: "account", defaultValues: defaultValues });

	useEffect(() => {
		register(defaultValues);
	}, []);
	const {address} = formValues['account'] ?? {};
    const options = ['France', 'Italy', 'Spain', 'Belgium'];

	useEffect(() => {
		validate(formValues['account'] ?? {});
	}, [formValues]);
    return (
		<section className="section checkout">
            <h2 className="section-title">ACCOUNT</h2>
            <div className="card checkout__container">
                <div className="checkout__body">

                    <div className="form__row">
                        <input type="text" name="first" id="first" className="form__input" placeholder="First Name" value={first} onChange={handleOnChange} required/>
                        <input type="text" name="last" id="last" className="form__input" placeholder="Last Name" value={last} onChange={handleOnChange} required/>
                    </div> 

                    <div className="form__row">
                        <input type="email" name="email" id="email" className="form__input" placeholder="Email" value={email} onChange={handleOnChange} required/>
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
                    <Button
                        //onClick={() => processPayment(orderWithShipping)} 
                        disabled={isValid}
                    >
                        Update
                    </Button>
                </div>
            </div>
		</section>
    );
}

export default Account;