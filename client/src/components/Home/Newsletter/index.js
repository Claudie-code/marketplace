import Button from '../../Button';
import './newsletter.css';

const Newsletter = () => {
	return (
		<section className="newsletter section">
			<div className="newsletter__container bd-grid">
			<div>
				<h3 className="newsletter__title">Subscribe And Get <br /> 10% OFF</h3>
				<p className="newsletter__description">Get 10% discount for all products</p>
			</div>

			<form className="newsletter__subscribe">
				<input type="text" placeholder="@email.com" className="newsletter__input" />
				<Button>Subscribe</Button>
			</form>
			</div>
		</section>
	);
};

export default Newsletter;