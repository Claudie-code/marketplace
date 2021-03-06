import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts, addToCart } from '../../lib/state/actions';
import Button from '../Button';
import ButtonNav from '../ButtonNav';
import SelectSize from '../SelectSize';
import './product.scss';

function ProductPage() {
    const dispatch = useDispatch();
    const [ selectedSize, setSelectedSize ] = useState('');
    const { slug } = useParams();
    const { items } = useSelector(state => state.products);
    const product = items.find(item => item.name === slug);
    const productWithSize = {
        ...product, 
        size: selectedSize
    };
    const addToCartAction = () => dispatch(addToCart(productWithSize));

    useEffect(() => {
        dispatch(fetchProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="featured section bd-grid">
            {product && 
                <>
                    <h2 className="section-title">{product.brand[0].name}</h2>
                    <div className="product__container">
                        <div>
                            <div>
                                <img src={product.image} alt={product.name} height='168' width='250' className="product__img" />
                            </div>
                            <div className="product__carousel">
                                <div>
                                    <img src={product.image} alt={product.name} height='168' width='250' className="product__small-img" />  
                                </div>
                                <div>
                                    <img src={product.image} alt={product.name} height='168' width='250' className="product__small-img" />  
                                </div>
                                <div>
                                    <img src={product.image} alt={product.name} height='168' width='250' className="product__small-img" />  
                                </div>
                                <div>
                                    <img src={product.image} alt={product.name} height='168' width='250' className="product__small-img" />  
                                </div>
                            </div>
                            <ButtonNav href="/shop" title="shop">Continue shopping</ButtonNav>
                        </div>
                        <div className="product__description">
                            <h3>{product.name}</h3>
                            <p>${product.price.$numberDecimal}</p>
                            <SelectSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                            <Button onClick={addToCartAction}>Add to cart</Button>
                            <div className="product__link">
                                <ButtonNav href="/cart" title="link cart">Cart</ButtonNav>
                            </div>
                            <div>
                                <div className="product__accordion large">
                                    <input type="checkbox" id="faq-1" className="product__input" />
                                    <h4 className="product__subtitle"><label htmlFor="faq-1" className="product__label">DESCRIPTION</label></h4>
                                    <div className="product__text">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur provident animi similique natus omnis maiores officia magnam expedita itaque. Ratione blanditiis quod nemo rem illum qui facilis omnis, esse, exercitationem recusandae nam quasi debitis eum? Quod, expedita maiores itaque ullam laudantium, eligendi illum autem odio assumenda voluptates id nulla consequatur dignissimos tenetur laborum consequuntur, eveniet pariatur! Porro quo alias maxime, saepe numquam voluptatem consectetur?</p>
                                    </div>
                                </div>
                                <div className="product__accordion">
                                    <input type="checkbox" id="faq-2" className="product__input" />
                                    <h4 className="product__subtitle"><label htmlFor="faq-2" className="product__label">AUTHENTICITY</label></h4>
                                    <div className="product__text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus porro illo, veritatis placeat eum!</p>
                                    </div>
                                </div>
                                <div className="product__accordion">
                                    <input type="checkbox" id="faq-3" className="product__input" />
                                    <h4 className="product__subtitle"><label htmlFor="faq-3" className="product__label">DELIVERY</label></h4>
                                    <div className="product__text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis inventore, amet deleniti maiores suscipit incidunt culpa rerum reprehenderit praesentium facilis accusantium officia impedit sequi, iure magnam accusamus est cum iusto!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </section>
    );
}

export default ProductPage;