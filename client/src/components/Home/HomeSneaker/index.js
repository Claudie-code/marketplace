import { useEffect, useRef, useState } from 'react';
import image from '../img/imghome.png';
import './home.css';

const HomeSneaker = ({ scrollActive, offset }) => {
	const homeRef = useRef();

	useEffect(() => {
		scrollActive(homeRef, "home");
	}, [offset]);

	return (
		<section className="home" id="home" ref={homeRef}>
			<div className="home__container bd-grid">
			<div className="home__sneaker">
				<div className="home__shape"></div>
				<img src={image} alt="" className="home__img" />
			</div>

			<div className="home__data">
				<span className="home__new">New in</span>
				{/* nom produit */}
				<h1 className="home__title">YEEZY BOOST <br /> SPLY - 350</h1>
				<p className="home__description">Explore the new collections of sneakers</p>
				<a href="#" className="button">Explore now</a>
			</div>
			</div>
		</section>
	);
};

export default HomeSneaker;