import { useEffect, useRef } from 'react';
import ProductPage from '../ProductCard';
import './featured.scss';

const Featured = ({ scrollActive, offset, featuredItems }) => {
	const featuredRef = useRef();

	useEffect(() => {
		scrollActive(featuredRef, "featured");
	}, [offset]);

	return (
		<section className="featured section" id="featured" ref={featuredRef}>
			<h2 className="section-title">FEATURED</h2>
			<div className="featured__container bd-grid">
				{featuredItems.map(featuredItem => (
					<ProductPage {...featuredItem} sale={true} />
					// <article className="sneaker" key={featuredItem.name}>
					// 	<div className="sneaker__sale">Sale</div>
					// 	<img src={featuredItem.image} alt={featuredItem.name} className="sneaker__img" />
					// 	<span className="sneaker__name">{featuredItem.brand[0].name} {featuredItem.model[0].name} {featuredItem.name}</span>
					// 	<span className="sneaker__preci">${featuredItem.price.$numberDecimal}</span>
					// 	<a href={`/products/${featuredItem.name}`} title={`product page ${featuredItem.name}`} className="button-light">Explore<i className='bx bx-right-arrow-alt button-icon'></i></a>
					// </article>
				))}
			</div>
		</section>
	);
};

export default Featured;