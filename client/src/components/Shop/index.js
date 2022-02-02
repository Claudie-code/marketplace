import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { fetchProducts } from '../../lib/state/actions';
import queryString from 'query-string';
import './shop.scss';

const Shop = () => { 
    const history = useHistory();
    const location = useLocation();
    const params = queryString.parse(location.search)
    const [ checkedItems, setCheckedItems ] = useState(params);
    const [ showModel, setShowModel ] = useState(false);
    const dispatch = useDispatch();
    const { slug } = useParams();
    const { items } = useSelector(state => state.products);
    const results = slug ? items.filter(item => item.brand.toLowerCase() === slug.toLowerCase()) : items;

    console.log("params", params)
    const handleChange = event => {
        setCheckedItems({
          ...checkedItems,
          [event.target.name]: event.target.checked
        });
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

    useEffect(() => {
        history.replace({ pathname: location.pathname, search: new URLSearchParams(checkedItems).toString() });
    }, [checkedItems]);

    return (
        <section className="featured section" id="shop">
            <h2 className="section-title">All Products</h2>

            <div className="bd-grid">
                <div className="dropdown">
                    <button className="dropdown__button" onClick={() => setShowModel(!showModel)}>Model</button>
                    <div className={`dropdown__content ${showModel ? "show__model" : ""}`}>
                        {checkboxes.map(element => (
                            <div key={element.name}>
                                <input type="checkbox" id={element.name} name={element.name}
                                    checked={checkedItems[element.name]} onChange={handleChange} />
                                <label htmlFor={element.name}>{element.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>  
            
            <div className="featured__container shop__container bd-grid">

                {results.map(result => (
                <article className="sneaker" key={result.name}>
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