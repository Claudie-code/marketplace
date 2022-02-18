import ProductCard from '../../ProductCard';
import './featured.scss';

const Featured = ({ featuredItems }) => {
	return (
		<section className="featured section" id="featured">
			<h2 className="section-title">FEATURED</h2>
			<div className="featured__container bd-grid">
				{featuredItems ? 
					featuredItems.map(featuredItem => (
						<div key={featuredItem._id}>
							<ProductCard {...featuredItem} sale={true} />
						</div>
					)) : <ProductCard sale={true} />
				}
			</div>
		</section>
	);
};

export default Featured;