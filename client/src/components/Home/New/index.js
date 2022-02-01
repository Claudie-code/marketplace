import { useEffect, useRef } from 'react';
import Link from '../../Link';
import new1 from '../img/new1.png';
import './new.scss';

const New = ({ scrollActive, offset, newItems }) => {
	const newRef = useRef();

	useEffect(() => {
		scrollActive(newRef, "new");
	}, [offset]);

	return (
		<section className="new section" id="new" ref={newRef}>
			<h2 className="section-title">NEW COLLECTION</h2>
			<div className="new__container bd-grid">
			<div className="new__mens">
				<img src={new1} alt="" className="new__mens-img" />
				<h3 className="new__title">Mens Shoes</h3>
				<span className="new__preci">From $79.99</span>
				<a href="#" className="button-light">View Collection <i className='bx bx-right-arrow-alt button-icon'></i></a>
			</div>

			<div className="new__sneaker">
				{newItems.map(newItem => (
					<div className="new__sneaker-card">
						<img src={newItem.image} alt={newItem.name} className="new__sneaker-img" />
						<div className="new__sneaker-overlay">
							<Link href="/" title={`link ${newItem.name}`}>Explore</Link>
						</div>
					</div>
				))}
			</div>
			</div>
		</section>
	);
};

export default New;