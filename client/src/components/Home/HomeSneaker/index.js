import { useEffect, useRef } from 'react';
import Link from '../../Link';
import image from '../img/imghome.png';
import './home.scss';

const HomeSneaker = ({ scrollActive, offset, homeItem }) => {
	const homeRef = useRef();

	useEffect(() => {
		scrollActive(homeRef, "home");
	}, [offset]);

	return (
		<section className="home" id="home" ref={homeRef}>
			<div className="home__container bd-grid">
			<div className="home__sneaker">
				<div className="home__shape"></div>
				<img src={image} alt={homeItem.name} className="home__img" />
			</div>

			<div className="home__data">
				<span className="home__new">New in</span>
				<h1 className="home__title">{homeItem.brand.toUpperCase()} <br /> {homeItem.model.toUpperCase()}</h1>
				<p className="home__description">Explore the new collections of sneakers</p>
				<Link href="/shop" title="link to shop">Explore now</Link>
			</div>
			</div>
		</section>
	);
};

export default HomeSneaker;