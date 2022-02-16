import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormValidation } from "../../lib/hooks/useFormValidation";
import useAuthentication from '../../lib/hooks/useAuthentication';
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import AlertMessage from "../AlertMessage";
import { Redirect } from "react-router-dom";

const options = ['France', 'Italy', 'Spain', 'Belgium'];

function Account() {
    const dispatch = useDispatch();
    const { handleUserUpdate } = useAuthentication(dispatch);
    const { user, error, message } = useSelector(state => state.user);

    const defaultValues = { 
        first: user?.first || "",
        last: user?.last || "",
        email: user?.email || "",
        city: user?.city || "",
        country: user?.country || "",
        address: user?.address || "",
        gender: user?.gender || ""
    };

    const {
          formValues,
          validate,
          handleOnChange,
          isValid
    } = useFormValidation({ formName: "account", defaultValues: defaultValues });
      
    const { 
		first, last, email, city, country, address, gender
	} = formValues['account'] ?? {};
  
    useEffect(() => {
        validate(formValues['account'] ?? {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues]);

    const handleOnSubmit = (event) => {
		event.preventDefault();
		const userUpdated = {
			first, 
			last, 
			email, 
			city, 
			country, 
			gender,
            address
		};
        
		handleUserUpdate(userUpdated).then((response) => {
			console.log('response', response)
		}).catch((error) => console.log('error updating user :', error));
	};

    if(!user) {
        return <Redirect to="/" />
    }

    return (
		<section className="section checkout">
            <h2 className="section-title">ACCOUNT</h2>
            <form className="card checkout__container" onSubmit={handleOnSubmit}>
                <div className="checkout__body">
                    <ErrorMessage error={error} />
                    <AlertMessage message={message} />
                    <div className="form__group">
						<input type="radio" name="gender" id="male" value="male" onChange={handleOnChange} checked={gender === "male"} required/>
						<label htmlFor="male">Male</label>
						<input type="radio" name="gender" id="female" value="female" onChange={handleOnChange} checked={gender === "female"} required/>
						<label htmlFor="female">Female</label>
					</div> 

                    <div className="form__row">
                        <input type="text" name="first" className="form__input" placeholder="First Name" value={first} onChange={handleOnChange} required/>
                        <input type="text" name="last" className="form__input" placeholder="Last Name" value={last} onChange={handleOnChange} required/>
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
                    <Button 
                        title='update user'
                        disabled={isValid}
                    >
                        Update
                    </Button>
                </div>
            </form>
		</section>
    );
}

export default Account;