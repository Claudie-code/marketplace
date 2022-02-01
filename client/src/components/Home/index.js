import { useEffect, useState } from 'react';
import { setSection } from '../../lib/state/actions/sectionAction';
import { useDispatch, useSelector } from 'react-redux';
import HomeSneaker from './HomeSneaker';
import Featured from './Featured';
import Collection from './Collection';
import Women from './Women';
import Offer from './Offer';
import New from './New';
import Newsletter from './Newsletter';
import { fetchProducts } from '../../lib/state/actions';

const Empty = ({ isVisible }) => !isVisible && <p style={{paddingTop: "7rem"}}>No Listing available ... </p>;

const Loading = ({ isLoading }) => isLoading && <p style={{paddingTop: "7rem"}}>Loading... </p>;

const Home = () => {
  const dispatch = useDispatch();
  const [ offset, setOffset ] = useState(0);
	const state = useSelector(state => ({...state.products}));
	const { items, isLoading } = state;
  const homeItem = items[0];
  const featuredItems = items.filter(item => item.model === "Air Jordan 1 High");
  const womenItems = items.filter(item => item.model === "Dunk Low");
  const newItems = items.filter(item => item.model === "Yeezy Boost 350");

  const scrollActive = (ref, id) => {
      const scrollY = window.scrollY;
      const sectionHeight = ref.current.offsetHeight;
      const sectionTop = ref.current.offsetTop - 50;

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        dispatch(setSection(id));
      }
  };
  
  useEffect(() => {
    dispatch(fetchProducts());
    window.addEventListener('scroll', () => setOffset(window.pageYOffset));
    return () => window.removeEventListener('scroll', () => setOffset(window.pageYOffset));
  }, []);

  return(
    <main className="l-main">    
      <Loading isLoading={isLoading} />
			<Empty isVisible={!!items} />
      <HomeSneaker scrollActive={scrollActive} offset={offset} homeItem={homeItem} />
      <Featured scrollActive={scrollActive} offset={offset} featuredItems={featuredItems} />
      <Collection />
      <Women scrollActive={scrollActive} offset={offset} womenItems={womenItems} />
      <Offer />
      <New scrollActive={scrollActive} offset={offset} newItems={newItems} />
      <Newsletter />
    </main>
  );
}
export default Home;