import { useEffect, useRef } from 'react';
import Link from '../../Link';
import Loader from '../../Loader';
import ButtonNav from '../../ButtonNav';
import new1 from '../img/new1.png';
import './new.scss';

const New = ({ scrollActive, offset, newItems, isLoading }) => {
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
				<ButtonNav href="/shop/adidas" title="adidas collection">View Collection</ButtonNav>
			</div>

			<div className="new__sneaker">
				{newItems && !isLoading ? 
					newItems.map(newItem => (
						<div className="new__sneaker-card" key={newItem.name}>
							<img src={newItem.image} alt={newItem.name} className="new__sneaker-img" />
							<div className="new__sneaker-overlay">
								<Link href={`/products/${newItem.name}`} title={`product page ${newItem.name}`}>Explore</Link>
							</div>
						</div>
					)) : 
					<div className="new__sneaker-card">
						<Loader />
						<div className="new__sneaker-overlay">
							<Link>Explore</Link>
						</div>
					</div>
				}
			</div>
			</div>
		</section>
	);
};

export default New;