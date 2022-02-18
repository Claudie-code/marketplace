import Link from '../../Link';
import Loader from '../../Loader';
import image from '../img/imghome.webp';
import './home.scss';

const HomeSneaker = ({ homeItem, isLoading }) => {
	return (
		<section className="home" id="home" >
				<div className="home__container bd-grid">
					<div className="home__sneaker">
						<div className="home__shape"></div>
						{homeItem && !isLoading ?
						 <img src={image} alt={homeItem.name} height='259' width='514' className="home__img" /> : <Loader />
						}
					</div>
					<div className="home__data">
						<span className="home__new">New in</span>
						{homeItem && !isLoading ? <h1 className="home__title">{homeItem.brand[0].name.toUpperCase()} <br /> {homeItem.model[0].name.toUpperCase()}</h1> : <Loader />
						}
						<p className="home__description">Explore the new collections of sneakers</p>
						<Link href="/shop" title="link to shop">Explore now</Link>
					</div>
				</div>
		</section>
	);
};

export default HomeSneaker;