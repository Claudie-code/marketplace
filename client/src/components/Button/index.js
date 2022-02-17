import './button.scss';

const Button = ({ children, onClick, arialabel, type }) => { 

	return (
        <button type={type} aria-label={arialabel} className="button" onClick={onClick}>{ children }</button>
	)
};

export default Button;