import { useEffect, useRef } from 'react';
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
					<article className="sneaker">
						<div className="sneaker__sale">Sale</div>
						<img src={featuredItem.image} alt={featuredItem.name} className="sneaker__img" />
						<span className="sneaker__name">{featuredItem.brand} {featuredItem.model}</span>
						<span className="sneaker__preci">${featuredItem.price.$numberDecimal}</span>
						<a href="" title={`link ${featuredItem.name}`} className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
					</article>
				))}
			</div>
		</section>
	);
};

export default Featured;