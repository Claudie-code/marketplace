import './link.scss';

const Link = ({ children, href, title }) => { 

	return (
        <a href={href} title={title} className="link">{ children }</a>
	)
};

export default Link;