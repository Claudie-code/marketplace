import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { fetchProducts } from '../../lib/state/actions';
import queryString from 'query-string';
import './shop.scss';
import { useRef } from 'react';

const Shop = () => { 
    const ref = useRef();
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.products);
    const { slug } = useParams();
    const [ brandCheckedItem, setBrandCheckedItem ] = useState(slug || "allproducts");
    const [ brandResults, setBrandResults ] = useState([]);
    const initialState = new URLSearchParams(location.search).getAll('model').length > 0 ? new URLSearchParams(location.search).getAll('model') : ["yeezy350", "jordanHigh", "dunkLow"];
    const [ checkedItems, setCheckedItems ] = useState(initialState);
    const [ modelResults, setModelResults ] = useState([]);
    const [ showModelMenu, setShowModelMenu ] = useState(false);
    const [ showBrandMenu, setShowBrandMenu ] = useState(false);

    const handleChange = (event, setChecked, checked, getFilter) => {
        let newCheckedItems;
        if (event.target.checked) {
            if (checked.includes(event.target.id)) return;
            newCheckedItems = [...checked, event.target.id];
            setChecked(newCheckedItems);
        } else {
            newCheckedItems = checked.filter(item => item !== event.target.id);
            setChecked(newCheckedItems);
        }
        getFilter(newCheckedItems);
    };

    const handleChangeBrand = (event, setChecked, checked, getFilter) => {
        setBrandCheckedItem(event.target.id)
        getFilter(event.target.id);
    };

    const brandCheckboxes = [
        {
            id: "allproducts",
            label: "All products"
        },
        {
            id: "adidas",
            label: "Adidas"
        },
        {
            id: "nike",
            label: "Nike"
        },
    ];

    const modelCheckboxes = [
        {
            id: "yeezy350",
            label: "Yeezy Boost 350",
            brandid: "adidas"
        },
        {
            id: "jordanHigh",
            label: "Air Jordan 1 High",
            brandid: "nike"
        },
        {
            id: "dunkLow",
            label: "Dunk Low",
            brandid: "nike"
        }
    ];

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (showModelMenu && ref.current && !ref.current.contains(e.target)) {
            setShowModelMenu(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showModelMenu]);


    const getFilterSearchUrl = (newCheckedItems) => {
        const params = new URLSearchParams();
        setModelResults(brandResults.filter(element => newCheckedItems.some(newCheckedItem => newCheckedItem === element.modelid)));
        newCheckedItems.forEach(value => params.append('model', value));
        history.push({ pathname: location.pathname, search: params.toString() });
    };

    const getFilterPathnameUrl = (newCheckedItem) => {
        if (newCheckedItem === "allproducts") {
            setBrandResults(items);
        } else {
            setBrandResults(items.filter(item => item.brand.toLowerCase() === newCheckedItem.toLowerCase()));
        }
        history.replace({ pathname: "/shop/" + newCheckedItem, search: location.search });
    };

    useEffect(() => {
        if (brandCheckedItem !== "allproducts") {
            setBrandResults(items.filter(item => item.brand.toLowerCase() === slug.toLowerCase()));
        } else {
            setBrandResults(items);
        }
    }, [items, brandCheckedItem]);

    useEffect(() => {
        setModelResults(brandResults.filter(element => checkedItems.some(checkedItem => checkedItem === element.modelid)));
    }, [location.pathname, brandResults]);
        
    return (
        <section className="featured section" id="shop"  >
            <h2 className="section-title">All Products</h2>

            <div className="dropdown bd-grid" >
                <div > 
                    <button className="dropdown__button" onClick={(event) => {setShowBrandMenu(!showBrandMenu)}}>Brand</button>
                    <div className={`dropdown__content ${showBrandMenu ? "show__brand" : ""}`} onClick={event => event.stopPropagation()}>
                        {brandCheckboxes.map(element => (
                            <div className="dropdown__checkbox" key={element.id}>
                                <input className="dropdown__icon" type="radio"  id={element.id} name="brand"
                                    checked={brandCheckedItem === element.id} onChange={event => handleChangeBrand(event, setBrandCheckedItem, brandCheckedItem, getFilterPathnameUrl)} />
                                <label htmlFor={element.id}>{element.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div ref={ref}>
                    <button className="dropdown__button" onClick={(event) => {setShowModelMenu(!showModelMenu)}}>Model</button>
                    <div className={`dropdown__content ${showModelMenu ? "show__model" : ""}`} onClick={event => event.stopPropagation()}>
                        {modelCheckboxes.map(element => {
                            if (brandCheckedItem === "allproducts") {
                                return (
                                    <div className="dropdown__checkbox" key={element.id}>
                                        <input className="dropdown__icon" type="checkbox"  id={element.id} name={element.id}
                                            checked={checkedItems.includes(element.id)} onChange={event => handleChange(event, setCheckedItems, checkedItems, getFilterSearchUrl)} />
                                        <label htmlFor={element.id}>{element.label}</label>
                                    </div>
                                );
                            } else if (element.brandid === brandCheckedItem) {
                                return (
                                    <div className="dropdown__checkbox" key={element.id}>
                                        <input className="dropdown__icon" type="checkbox"  id={element.id} name={element.id}
                                            checked={checkedItems.includes(element.id)} onChange={event => handleChange(event, setCheckedItems, checkedItems, getFilterSearchUrl)} />
                                        <label htmlFor={element.id}>{element.label}</label>
                                    </div>
                                );
                            }
                        })}
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