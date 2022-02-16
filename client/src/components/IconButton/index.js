import './icon-button.scss';

const IconButton = ({ children, href, onClick, title }) => { 
  return (
    <>
      {href ?
        <a title={title} className="icon-button" href={href}>
          { children }
        </a> :
        <button title={title} className="icon-button" onClick={onClick}>
          { children }
        </button>
      }
    </>
  );
};  

export default IconButton; 
