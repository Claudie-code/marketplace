const AlertMessage = ({ message }) => (
    !!message &&
	<div className="alert alert-info mt-3">
		<p className="icontext"><i className='bx bx-check-circle'></i> {message}</p>
    </div>
);

export default AlertMessage;

