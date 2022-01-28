import { useEffect, useRef } from 'react';
import Link from '../../Link';
import new1 from '../img/new1.png';
import new2 from '../img/new2.png';
import new3 from '../img/new3.png';
import new4 from '../img/new4.png';
import new5 from '../img/new5.png';
import './new.css';

const New = ({ scrollActive, offset }) => {
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
				<div className="new__sneaker-card">
				<img src={new2} alt="" className="new__sneaker-img" />
				<div className="new__sneaker-overlay">
					<Link>Explore</Link>
				</div>
				</div>

				<div className="new__sneaker-card">
				<img src={new3} alt="" className="new__sneaker-img" />
				<div className="new__sneaker-overlay">
					<Link href="/">Explore</Link>
				</div>
				</div>

				<div className="new__sneaker-card">
				<img src={new4} alt="" className="new__sneaker-img" />
				<div className="new__sneaker-overlay">
					<Link>Explore</Link>
				</div>
				</div>

				<div className="new__sneaker-card">
				<img src={new5} alt="" className="new__sneaker-img" />
				<div className="new__sneaker-overlay">
					<Link>Explore</Link>
				</div>
				</div>
			</div>
			</div>
		</section>
	);
};

export default New;