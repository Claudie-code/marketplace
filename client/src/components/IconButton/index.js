import './icon-button.scss';

const IconButton = ({ children, onClick }) => { 
  return (
    <div className="icon-button" onClick={onClick}>
        { children }
    </div>
  );
};  

export default IconButton; 
