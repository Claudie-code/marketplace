import './footer.scss';

const Footer = () => { 
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid">
          <div className="footer__box">
              <h3 className="footer__title">Roby</h3>
              <p className="footer__description">New collection of shoes 2022.</p>
          </div>
          <div className="footer__box">
              <h3 className="footer__title">EXPLORE</h3>
              <ul>
                  <li><a href="#home" className="footer__link">Home</a></li>
                  <li><a href="#featured" className="footer__link">Featured</a></li>
                  <li><a href="#women" className="footer__link">Women</a></li>
                  <li><a href="#new" className="footer__link">New</a></li>
              </ul>
          </div>
          <div className="footer__box">
              <h3 className="footer__title">SUPPORT</h3>
              <ul>
                  <li><button className="footer__link">Product Help</button></li>
                  <li><button className="footer__link">Custom Care</button></li>
                  <li><button className="footer__link">Authorized service</button></li>
              </ul>
          </div>
          <div className="footer__box">
              <button aria-label="roby's facebook social network" className="footer__social"><i className='bx bxl-facebook'></i></button>
              <button aria-label="roby's instagram social network" className="footer__social"><i className='bx bxl-instagram'></i></button>
              <button aria-label="roby's twitter social network" className="footer__social"><i className='bx bxl-twitter'></i></button>
              <button aria-label="roby's google social network" className="footer__social"><i className='bx bxl-google'></i></button>
          </div>
      </div>
  </footer>
  );
};
export default Footer 
