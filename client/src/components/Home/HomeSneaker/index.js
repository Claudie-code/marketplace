import Link from '../../Link';
import image from '../img/imghome.webp';
import './home.scss';

const HomeSneaker = ({ homeItem, isLoading }) => {
	return (
		<section className="home" id="home" >
				<div className="home__container bd-grid">
					<div className="home__sneaker">
						<div className="home__shape"></div>
						<img src={image} alt="adidas yeezy" height='259' width='514' className="home__img" />
					</div>
					<div className="home__data">
						<span className="home__new">New in</span>
						<h1 className="home__title">ADIDAS <br /> YEEZY BOOST 350</h1>
						<p className="home__description">Explore the new collections of sneakers</p>
						<Link href="/shop" title="link to shop">Explore now</Link>
					</div>
				</div>
		</section>
	);
};

export default HomeSneaker;