import './icon-button.scss';

const IconButton = ({ children, href, onClick, title, arialabel }) => { 
  return (
    <>
      {href ?
        <a title={title} className="icon-button" href={href}>
          { children }
        </a> :
        <button aria-label={arialabel} className="icon-button" onClick={onClick}>
          { children }
        </button>
      }
    </>
  );
};  

export default IconButton; 
