import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../lib/state/actions';
import ProductCard from '../ProductCard';
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            
            <div className="models__container shop__container bd-grid">

                {modelResults.map(modelResult => (
                    <div key={modelResult._id}>
                        <ProductCard {...modelResult} />
                    </div>
                ))}

            </div>

            <div className="sneaker__pages bd-grid">
                <div>
                    <button className="sneaker__pag">1</button>
                    <button className="sneaker__pag" disabled={true}>2</button>
                    <button className="sneaker__pag" disabled={true}>&#8594;</button>
                </div>
            </div>
        </section>
    );
}  
export default Shop;