import offert from '../img/offert.webp';
import './offer.css';

const Offer = () => {
	return (
		<section className="offer section">
			<div className="offer__container bd-grid">
			<div className="offer__data">
				<h3 className="offer__title">50% OFF</h3>
				<p className="offer__description">In Adidas Superstar sneakers</p>
				<a href="/shop/adidas" title="adidas collection" className="button">Shop Now</a>
			</div>

			<img src={offert} alt="adidas sneakers" height='495' width='283' className="offer__img" />
			</div>
		</section>
	);
};

export default Offer;