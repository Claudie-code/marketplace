




import offert from './img/offert.png';
import new1 from './img/new1.png';
import new2 from './img/new2.png';
import new3 from './img/new3.png';
import new4 from './img/new4.png';
import new5 from './img/new5.png';


import './offer.css';
import './new.css';
import './newsletter.css';
import { useEffect, useRef, useState } from 'react';
import { setSection } from '../../lib/state/actions/sectionAction';
import { useDispatch } from 'react-redux';
import HomeSneaker from './HomeSneaker';
import Featured from './Featured';
import Collection from './Collection';
import Women from './Women';

const Home = () => {
  const dispatch = useDispatch();
  const [ offset, setOffset ] = useState(0);

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


    scrollActive(newRef, "new");
  }, [offset]);

  return(
    <main className="l-main">    
      <HomeSneaker scrollActive={scrollActive} offset={offset} />
      <Featured scrollActive={scrollActive} offset={offset} />
      <Collection />
      <Women scrollActive={scrollActive} offset={offset} />



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