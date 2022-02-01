import { useEffect, useRef, useState } from 'react';
import women1 from '../img/women1.png';
import women2 from '../img/women2.png';
import women3 from '../img/women3.png';
import women4 from '../img/women4.png';
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
					<article className="sneaker" key={womanItem.name}>
						<img src={womanItem.image} alt={womanItem.name} className="sneaker__img" />
						<span className="sneaker__name">{womanItem.brand} {womanItem.model}</span>
						<span className="sneaker__preci">${womanItem.price.$numberDecimal}</span>
						<a href="" title={`link ${womanItem.name}`} className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
					</article>
				))}
			</div>
		</section>
	);
};

export default Women;