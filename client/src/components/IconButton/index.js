import './icon-button.scss';

const IconButton = ({ children, href, onClick }) => { 
  return (
    <>
      {href ?
        <a className="icon-button" href={href}>
          { children }
        </a> :
        <button className="icon-button" onClick={onClick}>
          { children }
        </button>
      }
    </>
  );
};  

export default IconButton; 
