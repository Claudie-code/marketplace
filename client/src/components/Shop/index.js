import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../lib/state/actions';
import Dropdown from './Dropdown.js';
import DropdownRadio from './DropdownRadio.js';
import './shop.scss';

const Shop = () => { 
    const dispatch = useDispatch();
    const { slug } = useParams();
    const [ brandCheckedItem, setBrandCheckedItem ] = useState(slug || "allproducts");
    const [ brandResults, setBrandResults ] = useState([]);
    const [ modelResults, setModelResults ] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchBrands());
        dispatch(fetchModels());
    }, []);
        
    return (
        <section className="featured section" id="shop"  >
            <h2 className="section-title">All Products</h2>

            <div className="dropdown bd-grid" >
                <DropdownRadio 
                    setBrandResults={setBrandResults} 
                    brandCheckedItem={brandCheckedItem} 
                    setBrandCheckedItem={setBrandCheckedItem}
                />
                <Dropdown 
                    brandResults={brandResults} 
                    setModelResults={setModelResults} 
                    brandCheckedItem={brandCheckedItem}
                />
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