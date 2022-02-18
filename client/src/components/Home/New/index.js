import Link from '../../Link';
import Loader from '../../Loader';
import ButtonNav from '../../ButtonNav';
import new1 from '../img/new1.webp';
import './new.scss';

const New = ({ newItems, isLoading }) => {
	return (
		<section className="new section" id="new">
			<h2 className="section-title">NEW COLLECTION</h2>
			<div className="new__container bd-grid">
			<div className="new__mens">
				<img src={new1} alt="adidas sneakers" height='357' width='500' className="new__mens-img" />
				<h3 className="new__title">Mens Shoes</h3>
				<span className="new__preci">From $79.99</span>
				<ButtonNav href="/shop/adidas" title="adidas collection">View Collection</ButtonNav>
			</div>

			<div className="new__sneaker">
				{newItems && !isLoading ? 
					newItems.map(newItem => (
						<div className="new__sneaker-card" key={newItem.name}>
							<img src={newItem.image} alt={newItem.name} height='168' width='250' className="new__sneaker-img" />
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