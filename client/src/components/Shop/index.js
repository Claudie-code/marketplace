import new5 from './new5.png';
import './shop.css';

const Shop = () => { 

    return (
        <section className="featured section" id="shop">
            <h2 className="section-title">All Products</h2>
            <div className="featured__container bd-grid">
                <article className="sneaker">
                    <img src={new5} alt="" className="sneaker__img" />
                    <span className="sneaker__name">Nike Jordan</span>
                    <span className="sneaker__preci">$149.99</span>
                    <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
                <article className="sneaker">
                    <img src={new5} alt="" className="sneaker__img" />
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__preci">$149.99</span>
                    <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
                <article className="sneaker">
                    <img src={new5} alt="" className="sneaker__img" />
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__preci">$149.99</span>
                    <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
                <article className="sneaker">
                    <img src={new5} alt="" className="sneaker__img" />
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__preci">$79.99</span>
                    <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
                <article className="sneaker">
                    <img src={new5} alt="" className="sneaker__img" />
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__preci">$79.99</span>
                    <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
                <article className="sneaker">
                    <img src={new5} alt="" className="sneaker__img" />
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__preci">$79.99</span>
                    <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
                <article className="sneaker">
                    <img src={new5} alt="" className="sneaker__img" />
                    <span className="sneaker__name">Nike Womens</span>
                    <span className="sneaker__preci">$129.99</span>
                    <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>
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