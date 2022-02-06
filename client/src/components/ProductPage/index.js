import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts, addToCart } from '../../lib/state/actions';
import Button from '../Button';
import './product.scss';

function ProductPage() {
    const dispatch = useDispatch();
    const [ selectedSize, setSelectedSize ] = useState();
    const { slug } = useParams();
    const { items } = useSelector(state => state.products);
    const product = items.find(item => item.name === slug);
    const addToCartAction = () => dispatch(addToCart(product._id, product.name, product.price.$numberDecimal));
    console.log(slug, product);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const sizes = [
        { value: "36 EU"},
        { value: "36 2/3 EU"},
        { value: "37 1/3 EU"},
        { value: "38 EU"},
        { value: "38 2/3 EU"},
        { value: "39 1/3 EU"},
        { value: "40 EU"},
        { value: "40 2/3 EU"},
        { value: "41 1/3 EU"},
        { value: "42 EU"},
        { value: "42 2/3"},
        { value: "43 1/3 EU"},
        { value: "44 EU"},
        { value: "44 2/3 EU"},
        { value: "45 1/3 EU"},
        { value: "46 EU"},
        { value: "46 2/3 EU"},
    ]
    return (
        <section className="featured section bd-grid">
            {product && 
                <>
                    <h2 className="section-title">{product.brand[0].name}</h2>
                    <div className="product__container">
                        <img src={product.product_image} alt={product.name} className="product__img" />
                        <div className="product__description">
                            <h3>{product.name}</h3>
                            <p>${product.price.$numberDecimal}</p>
                            <div>
                                <p>Select a size:</p>
                                <select name="size" id="size-select" value={selectedSize}>
                                    {sizes.map(size => (
                                        <option key={size.value} value={size.value}>{size.value}</option>
                                    ))}
                                </select>
                            </div>
                            <Button onClick={addToCartAction}>Add to cart</Button>
                            <a href="/cart" title="link cart" className="button-light product__link">Cart <i className='bx bx-right-arrow-alt button-icon'></i></a>
                        </div>
                    </div>
                </>
            }
        </section>
    );
}

export default ProductPage;