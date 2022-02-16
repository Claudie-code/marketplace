import './button.scss';

const Button = ({ children, onClick, title }) => { 

	return (
        <button title={title} className="button" onClick={onClick}>{ children }</button>
	)
};

export default Button;