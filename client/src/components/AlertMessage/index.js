const AlertMessage = ({ message }) => (
    !!message &&
	<div className="alert alert-info mt-3">
		<p className="icontext"><i className="icon text-primary fa fa-thumbs-up"></i>{message}</p>
    </div>
);

export default AlertMessage;

