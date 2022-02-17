import './button.scss';

const Button = ({ children, onClick, arialabel }) => { 

	return (
        <button aria-label={arialabel} className="button" onClick={onClick}>{ children }</button>
	)
};

export default Button;