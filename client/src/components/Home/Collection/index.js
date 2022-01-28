import { useEffect, useRef, useState } from 'react';
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
				<a href="#" className="button-light">Buy now <i className='bx bx-right-arrow-alt button-icon'></i></a>
				</div>

				<img src={collection1} alt="" className="collection__img" />
			</div>

			<div className="collection__card">
				<div className="collection__data">
				<h3 className="collection__name">Addidas</h3>
				<p className="collection__description">New collection 2022</p>
				<a href="#" className="button-light">Buy now <i className='bx bx-right-arrow-alt button-icon'></i></a>
				</div>

				<img src={collection2} alt="" className="collection__img" />
			</div>
			</div>
		</section>
	);
};

export default Collection;