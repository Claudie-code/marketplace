import './modal.scss';

const Modal = ({ showModal, setShowModal, children }) => { 

    return (
        <div className={`modal ${showModal && "showModal"}`} onClick={() => setShowModal(!showModal)}>	
            <div 
                className="modal__wrap"
                onClick={(event) => event.stopPropagation()}
            >	
                { children }  
                <button className="modal__close" onClick={() => setShowModal(!showModal)}>&times;</button>	 		
            </div>
		          		
        </div>	
    );
}  

export default Modal;