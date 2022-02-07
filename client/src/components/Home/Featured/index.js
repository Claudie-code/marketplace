import { useEffect, useRef } from 'react';
import ProductCard from '../ProductCard';
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
				{featuredItems ? 
					featuredItems.map(featuredItem => (
						<ProductCard {...featuredItem} sale={true} />
					)) : <ProductCard sale={true} />
				}
			</div>
		</section>
	);
};

export default Featured;