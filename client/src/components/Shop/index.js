import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { fetchProducts } from '../../lib/state/actions';
import './shop.scss';

const Shop = () => { 
    const history = useHistory();
    const location = useLocation();
    const [ checkedItems, setCheckedItems ] = useState({});
    const [ showModel, setShowModel ] = useState(false);
    const dispatch = useDispatch();
    const { slug } = useParams();
    const { items } = useSelector(state => state.products);
    const results = slug ? items.filter(item => item.brand.toLowerCase() === slug.toLowerCase()) : items;

    const handleChange = event => {
        setCheckedItems({
          ...checkedItems,
          [event.target.name]: event.target.checked
        });
        const params = new URLSearchParams(event.target.name);
        history.replace({ pathname: location.pathname, search: params.toString() });
    };

    const checkboxes = [
        {
            name: "yeezy350",
            label: "Yeezy Boost 350"
        },
        {
            name: "jordanHigh",
            label: "Air Jordan 1 High"
        },
        {
            name: "dunkLow",
            label: "Dunk Low"
        }
    ];

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <section className="featured section" id="shop">
            <h2 className="section-title">All Products</h2>

            <div className="bd-grid">
                <div className="dropdown">
                    <button class="dropdown__button" onClick={() => setShowModel(!showModel)}>Model</button>
                    <div class={`dropdown__content ${showModel ? "show__model" : ""}`}>
                        {checkboxes.map(element => (
                            <div>
                                <input type="checkbox" id={element.name} name={element.name}
                                    checked={checkedItems[element.name]} onChange={handleChange} />
                                <label for={element.name}>{element.label}</label>
                            </div>
                        ))}
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