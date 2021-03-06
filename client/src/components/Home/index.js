import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeSneaker from './HomeSneaker';
import Featured from './Featured';
import Collection from './Collection';
import Women from './Women';
import Offer from './Offer';
import New from './New';
import Newsletter from './Newsletter';
import { fetchProducts } from '../../lib/state/actions';

const Home = () => {
  const dispatch = useDispatch();
	const state = useSelector(state => ({...state.products}));
	const { isLoading, featuredItems, womenItems, newItems } = state;
  
  const scrollActive = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
  
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active')
      } else {
        document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active')
      }
    })
  };
  
  useEffect(() => {
    dispatch(fetchProducts());
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <main className="l-main">    
      <HomeSneaker isLoading={isLoading} />
      <Featured featuredItems={featuredItems} />
      <Collection />
      <Women womenItems={womenItems} />
      <Offer />
      <New newItems={newItems} isLoading={isLoading} />
      <Newsletter />
    </main>
  );
}
export default Home;