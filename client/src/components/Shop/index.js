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
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.products);
    const { slug } = useParams();
    const brandResults = slug ? items.filter(item => item.brand.toLowerCase() === slug.toLowerCase()) : items;
    const initialState = new URLSearchParams(location.search).getAll('model').length > 0 ? new URLSearchParams(location.search).getAll('model') : [];
    const [ checkedItems, setCheckedItems ] = useState(initialState);
    const [ modelResults, setModelResults ] = useState([]);
    const [ showModel, setShowModel ] = useState(false);

    const handleChange = event => {
        event.stopPropagation();
        setShowModel(!showModel)
        let newCheckedItems;
        if (event.target.checked) {
            if (checkedItems.includes(event.target.name)) return;
            newCheckedItems = [...checkedItems, event.target.name];
            setCheckedItems(newCheckedItems);
        } else {
            newCheckedItems = checkedItems.filter(item => item !== event.target.name);
            setCheckedItems(newCheckedItems);
        }
        getFilterData(newCheckedItems);
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
        setModelResults(brandResults.filter(element => initialState.some(checkedItem => checkedItem === element.modelid)))
    }, [brandResults]);

    const getFilterData = (newCheckedItems) => {
        const params = new URLSearchParams();
        setModelResults(brandResults.filter(element => newCheckedItems.some(newCheckedItem => newCheckedItem === element.modelid)));
        newCheckedItems.forEach(value => params.append('model', value));
        history.push({ pathname: location.pathname, search: params.toString() });
    };

    return (
        <section className="featured section" id="shop" onClick={() => setShowModel(false)}>
            <h2 className="section-title">All Products</h2>

            <div className="bd-grid">
                <div className="dropdown">
                    <button className="dropdown__button" onClick={(event) => {event.stopPropagation(); setShowModel(!showModel)}}>Model</button>
                    <div className={`dropdown__content ${showModel ? "show__model" : ""}`}>
                        {checkboxes.map(element => (
                            <div className="dropdown__checkbox" key={element.name}>
                                <input className="dropdown__icon" type="checkbox"  id={element.name} name={element.name}
                                    checked={checkedItems.includes(element.name)} onChange={handleChange} />
                                <label htmlFor={element.name}>{element.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>  
            
            <div className="featured__container shop__container bd-grid">

                {modelResults.map(modelResult => (
                <article className="sneaker" key={modelResult.name}>
                    <img src={modelResult.image} alt={modelResult.name} className="sneaker__img" />
                    <span className="sneaker__name">{modelResult.model} <br /> {modelResult.name}</span>
                    <span className="sneaker__preci">${modelResult.price.$numberDecimal}</span>
                    <a href="" title={`link ${modelResult.name}`} className="button-light">Explore<i className='bx bx-right-arrow-alt button-icon'></i></a>
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