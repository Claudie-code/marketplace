import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../lib/state/actions';
import './shop.css';

const Shop = () => { 
    const dispatch = useDispatch();
    const { slug } = useParams();
    const { items } = useSelector(state => state.products);
    const results = slug ? items.filter(item => item.brand.toLowerCase() === slug.toLowerCase()) : items;

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <section className="featured section" id="shop">
            <h2 className="section-title">All Products</h2>
            <div>
                <div className="dropdown">
                    <button class="dropdown__button">Model</button>
                    <div class="dropdown-content">
                        <div>
                            <input type="checkbox" id="yeezy350" name="yeezy350"
                                    checked />
                            <label for="yeezy350">Yeezy Boost 350</label>
                        </div>
                        <div>
                            <input type="checkbox" id="jordanHigh" name="jordanHigh"
                                    checked />
                            <label for="jordanHigh">Air Jordan 1 High</label>
                        </div>
                        <div>
                            <input type="checkbox" id="dunkLow" name="dunkLow"
                                    checked />
                            <label for="dunkLow">Dunk Low</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured__container shop__container bd-grid">
                {results.map(result => (
                <article className="sneaker">
                    <img src={result.image} alt={result.name} className="sneaker__img" />
                    <span className="sneaker__name">{result.model} <br /> {result.name}</span>
                    <span className="sneaker__preci">${result.price.$numberDecimal}</span>
                    <a href="" title={`link ${result.name}`} className="button-light">Explore<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
                ))}

            </div>

            <div className="sneaker__pages bd-grid">
                <div>
                    <span className="sneaker__pag">1</span>
                    <span className="sneaker__pag">2</span>
                    <span className="sneaker__pag">3</span>
                    <span className="sneaker__pag">4</span>
                    <span className="sneaker__pag">&#8594;</span>
                </div>
            </div>
        </section>
    );
}  
export default Shop;