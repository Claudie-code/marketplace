import Gallery from './Gallery'
import image from './img/imghome.png';
import image2 from './img/featured1.png';
import image3 from './img/featured2.png';
import image4 from './img/featured3.png';
import './home.css';
import './featured.css';
import { useEffect, useRef, useState } from 'react';
import { setSection } from '../../lib/state/actions/sectionAction';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const [ offset, setOffset ] = useState(0);
  const homeRef = useRef();
  const featuredRef = useRef();

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
      {/* <Deals />
      <Gallery /> */}
    </main>
  );
}
export default Home;