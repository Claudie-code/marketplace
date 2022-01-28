import './icon-button.scss';

const IconButton = ({ children, href }) => { 
  return (
    <a className="icon-button" href={href}>
        { children }
    </a>
  );
};  

export default IconButton; 
