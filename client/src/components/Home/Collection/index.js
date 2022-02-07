import ButtonNav from '../../ButtonNav';
import collection1 from '../img/collection1.png';
import collection2 from '../img/collection2.png';
import './collection.scss';

const Collection = () => {
	return (
		<section className="collection section">
			<div className="collection__container bd-grid">
			<div className="collection__card">
				<div className="collection__data">
				<h3 className="collection__name">Nike</h3>
				<p className="collection__description">New collection 2022</p>
				<ButtonNav href="/shop/nike" title="nike collection">Buy now</ButtonNav>
				</div>

				<img src={collection1} alt="nike collection" className="collection__img" />
			</div>

			<div className="collection__card">
				<div className="collection__data">
					<h3 className="collection__name">Adidas</h3>
					<p className="collection__description">New collection 2022</p>
					<ButtonNav href="/shop/adidas" title="adidas collection">Buy now</ButtonNav>
				</div>
				<img src={collection2} alt="adidas collection" className="collection__img" />
			</div>
			</div>
		</section>
	);
};

export default Collection;