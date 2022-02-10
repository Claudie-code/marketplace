const ErrorMessage = ({ error }) => (
  error && 
	<div className="alert alert-danger mt-3">
		<p className="icontext]" style={{ color: 'crimson' }}><i className="icon text-danger fas fa-exclamation-circle"></i> {' '}{error?.error}</p>
  </div>
);

export default ErrorMessage;

