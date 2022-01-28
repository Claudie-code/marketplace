import './link.scss';

const Link = ({ children, href }) => { 

	return (
        <a href={href} className="link">{ children }</a>
	)
};

export default Link;