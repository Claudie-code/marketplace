import { useEffect, useRef } from 'react';
import ProductCard from '../ProductCard';
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
				{womenItems ? 
					womenItems.map(womanItem => (
						<div key={womanItem._id}>
							<ProductCard {...womanItem} />
						</div>
					)) : <ProductCard />
				}
			</div>
		</section>
	);
};

export default Women;