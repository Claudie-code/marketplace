import Gallery from './Gallery'
import image from './img/imghome.png';
import image2 from './img/featured1.png';
import image3 from './img/featured2.png';
import image4 from './img/featured3.png';
import collection1 from './img/collection1.png';
import collection2 from './img/collection2.png';
import women1 from './img/women1.png';
import women2 from './img/women2.png';
import women3 from './img/women3.png';
import women4 from './img/women4.png';
import offert from './img/offert.png';
import new1 from './img/new1.png';
import new2 from './img/new2.png';
import new3 from './img/new3.png';
import new4 from './img/new4.png';
import new5 from './img/new5.png';
import './home.css';
import './featured.css';
import './collection.css';
import './women.css';
import './offer.css';
import './new.css';
import './newsletter.css';
import { useEffect, useRef, useState } from 'react';
import { setSection } from '../../lib/state/actions/sectionAction';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const [ offset, setOffset ] = useState(0);
  const homeRef = useRef();
  const featuredRef = useRef();
  const womenRef = useRef();
  const newRef = useRef();

  const scrollActive = (ref, id) => {
      const scrollY = window.scrollY;
      const sectionHeight = ref.current.offsetHeight;
      const sectionTop = ref.current.offsetTop - 50;

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        dispatch(setSection(id));
      }
  };
  
  useEffect(() => {
      window.addEventListener('scroll', () => setOffset(window.pageYOffset));
  }, []);

  useEffect(() => {
    scrollActive(homeRef, "home");
    scrollActive(featuredRef, "featured");
    scrollActive(womenRef, "women");
    scrollActive(newRef, "new");
}, [offset]);

  return(
    <main className="l-main">  

      <section className="home" id="home" ref={homeRef}>
        <div className="home__container bd-grid">
          <div className="home__sneaker">
            <div className="home__shape"></div>
            <img src={image} alt="" className="home__img" />
          </div>

          <div className="home__data">
            <span className="home__new">New in</span>
            {/* nom produit */}
            <h1 className="home__title">YEEZY BOOST <br /> SPLY - 350</h1>
            <p className="home__description">Explore the new collections of sneakers</p>
            <a href="#" className="button">Explore now</a>
          </div>
        </div>
      </section>
      
      <section className="featured section" id="featured" ref={featuredRef}>
        <h2 className="section-title">FEATURED</h2>
        <div className="featured__container bd-grid">
          <article className="sneaker">
            <div className="sneaker__sale">Sale</div>
            <img src={image2} alt="" className="sneaker__img" />
            <span className="sneaker__name">Nike Jordan</span>
            <span className="sneaker__preci">$149.99</span>
            <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
          </article>
          <article className="sneaker">
            <div className="sneaker__sale">Sale</div>
            <img src={image3} alt="" className="sneaker__img" />
            <span className="sneaker__name">Nike Free RN</span>
            <span className="sneaker__preci">$149.99</span>
            <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
          </article>
          <article className="sneaker">
            <div className="sneaker__sale">Sale</div>
            <img src={image4} alt="" className="sneaker__img" />
            <span className="sneaker__name">Nike Free RN</span>
            <span className="sneaker__preci">$149.99</span>
            <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
          </article>
        </div>
      </section>

      <section className="collection section">
        <div className="collection__container bd-grid">
          <div className="collection__card">
            <div className="collection__data">
              <h3 className="collection__name">Nike</h3>
              <p className="collection__description">New collection 2022</p>
              <a href="#" className="button-light">Buy now <i className='bx bx-right-arrow-alt button-icon'></i></a>
            </div>

            <img src={collection1} alt="" className="collection__img" />
          </div>

          <div className="collection__card">
            <div className="collection__data">
              <h3 className="collection__name">Addidas</h3>
              <p className="collection__description">New collection 2022</p>
              <a href="#" className="button-light">Buy now <i className='bx bx-right-arrow-alt button-icon'></i></a>
            </div>

            <img src={collection2} alt="" className="collection__img" />
          </div>
        </div>
      </section>

      <section className="women section" id="women" ref={womenRef}>
        <h2 className="section-title">WOMEN SNEAKERS</h2>
        <div className="women__container bd-grid">
          <article className="sneaker">
            <img src={women1} alt="" className="sneaker__img" />
            <span className="sneaker__name">Nike Free TR</span>
            <span className="sneaker__preci">$129.99</span>
            <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
          </article>
          <article className="sneaker">
            <img src={women2} alt="" className="sneaker__img" />
            <span className="sneaker__name">Nike Free TR</span>
            <span className="sneaker__preci">$129.99</span>
            <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
          </article>
          <article className="sneaker">
            <img src={women3} alt="" className="sneaker__img" />
            <span className="sneaker__name">Nike GS Pink</span>
            <span className="sneaker__preci">$129.99</span>
            <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
          </article>
          <article className="sneaker">
            <img src={women4} alt="" className="sneaker__img" />
            <span className="sneaker__name">Nike Get 5</span>
            <span className="sneaker__preci">$129.99</span>
            <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
          </article>
        </div>
      </section>

      <section className="offer section">
        <div className="offer__container bd-grid">
          <div className="offer__data">
            <h3 className="offer__title">50% OFF</h3>
            <p className="offer__description">In Adidas Superstar sneakers</p>
            <a href="#" className="button">Shop Now</a>
          </div>

          <img src={offert} alt="" className="offer__img" />
        </div>
      </section>

      <section className="new section" id="new" ref={newRef}>
        <h2 className="section-title">NEW COLLECTION</h2>
        <div className="new__container bd-grid">
          <div className="new__mens">
            <img src={new1} alt="" className="new__mens-img" />
            <h3 className="new__title">Mens Shoes</h3>
            <span className="new__preci">From $79.99</span>
            <a href="#" className="button-light">View Collection <i className='bx bx-right-arrow-alt button-icon'></i></a>
          </div>

          <div className="new__sneaker">
            <div className="new__sneaker-card">
              <img src={new2} alt="" className="new__sneaker-img" />
              <div className="new__sneaker-overlay">
                <a href="#" className="button">Add to Cart</a>
              </div>
            </div>

            <div className="new__sneaker-card">
              <img src={new3} alt="" className="new__sneaker-img" />
              <div className="new__sneaker-overlay">
                <a href="#" className="button">Add to Cart</a>
              </div>
            </div>

            <div className="new__sneaker-card">
              <img src={new4} alt="" className="new__sneaker-img" />
              <div className="new__sneaker-overlay">
                <a href="#" className="button">Add to Cart</a>
              </div>
            </div>

            <div className="new__sneaker-card">
              <img src={new5} alt="" className="new__sneaker-img" />
              <div className="new__sneaker-overlay">
                <a href="#" className="button">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter section">
        <div className="newsletter__container bd-grid">
          <div>
            <h3 className="newsletter__title">Subscribe And Get <br /> 10% OFF</h3>
            <p className="newsletter__description">Get 10% discount for all products</p>
          </div>

          <form className="newsletter__subscribe">
            <input type="text" placeholder="@email.com" className="newsletter__input" />
            <a href="#" className="button">Subscribe</a>
          </form>
        </div>
      </section>
      {/* <Deals />
      <Gallery /> */}
    </main>
  );
}
export default Home;