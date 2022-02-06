import { useEffect, useRef } from 'react';
import ProductPage from '../ProductCard';
import './women.css';

const Women = ({ scrollActive, offset, womenItems }) => {
	const womenRef = useRef();

	useEffect(() => {
		scrollActive(womenRef, "women");
	}, [offset]);

	return (
		<section className="women section" id="women" ref={womenRef}>
			<h2 className="section-title">WOMEN SNEAKERS</h2>
			<div className="women__container bd-grid">
				{womenItems.map(womanItem => (
					<ProductPage {...womanItem} />
					// <article className="sneaker" key={womanItem.name}>
					// 	<img src={womanItem.image} alt={womanItem.name} className="sneaker__img" />
					// 	<span className="sneaker__name">{womanItem.brand[0].name} {womanItem.model[0].name}</span>
					// 	<span className="sneaker__preci">${womanItem.price.$numberDecimal}</span>
					// 	<a href={`/products/${womanItem.name}`} title={`product page ${womanItem.name}`} className="button-light">Explore<i className='bx bx-right-arrow-alt button-icon'></i></a>
					// </article>
				))}
			</div>
		</section>
	);
};

export default Women;