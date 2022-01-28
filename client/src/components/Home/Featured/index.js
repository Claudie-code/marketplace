import { useEffect, useRef } from 'react';
import image2 from '../img/featured1.png';
import image3 from '../img/featured2.png';
import image4 from '../img/featured3.png';
import './featured.scss';

const Featured = ({ scrollActive, offset }) => {
	const featuredRef = useRef();

	useEffect(() => {
		scrollActive(featuredRef, "featured");
	}, [offset]);

	return (
		<section className="featured section" id="featured" ref={featuredRef}>
			<h2 className="section-title">FEATURED</h2>
			<div className="featured__container bd-grid">
			<article className="sneaker">
				<div className="sneaker__sale">Sale</div>
				<img src={image2} alt="" className="sneaker__img" />
				<span className="sneaker__name">Nike Jordan</span>
				<span className="sneaker__preci">$149.99</span>
				<a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
			</article>
			<article className="sneaker">
				<div className="sneaker__sale">Sale</div>
				<img src={image3} alt="" className="sneaker__img" />
				<span className="sneaker__name">Nike Free RN</span>
				<span className="sneaker__preci">$149.99</span>
				<a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
			</article>
			<article className="sneaker">
				<div className="sneaker__sale">Sale</div>
				<img src={image4} alt="" className="sneaker__img" />
				<span className="sneaker__name">Nike Free RN</span>
				<span className="sneaker__preci">$149.99</span>
				<a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
			</article>
			</div>
		</section>
	);
};

export default Featured;