import { useState, useEffect, useRef } from 'react';  
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import './layout.css';
import './nav.css';
import './footer.css';
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
    const [ show, setShow ] = useState(false);
	const { section } = useSelector(state => state.section);	
    const [ scrollHeader, setScrollHeader ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 200) setScrollHeader(true); else setScrollHeader(false);
        })
    }, []);

    return (
        <Router> 
            <header className={`l-header ${scrollHeader? "scroll-header" : ""}`} id="header">
                <nav className="nav bd-grid">
                    <div className="nav__toggle" id="nav-toggle" onClick={() => setShow(!show)}>
                        <i className='bx bxs-grid'></i>
                    </div>

                    <a href="#" className="nav__logo">Roby</a>

                    <div className={`nav__menu ${show ? "show" : ""}`} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a 
                                    href="#" 
                                    className={`nav__link ${section === "home" ? "active" : ""}`} 
                                    onClick={() => setShow(!show)}
                                >
                                Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a 
                                    href="#featured" 
                                    className={`nav__link ${section === "featured" ? "active" : ""}`} 
                                    onClick={() => setShow(!show)}
                                >
                                    Featured
                                </a>
                            </li>
                            <li className="nav__item">
                                <a 
                                    href="#women" 
                                    className={`nav__link ${section === "women" ? "active" : ""}`} 
                                    onClick={() => setShow(!show)}
                                >
                                    Women
                                </a>
                            </li>
                            <li className="nav__item">
                                <a 
                                    href="#new" 
                                    className={`nav__link ${section === "new" ? "active" : ""}`} 
                                    onClick={() => setShow(!show)}
                                >
                                    New
                                </a>
                            </li>
                            <li className="nav__item">
                                <a 
                                    href="/shop" 
                                    className="nav__link" 
                                    onClick={() => setShow(!show)}
                                >
                                    Shop
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="nav__shop">
                        <i className='bx bx-shopping-bag' ></i>
                    </div>
                </nav>
            </header>
            { children }
            <footer className="footer section">
                <div className="footer__container bd-grid">
                    <div className="footer__box">
                        <h3 className="footer__title">Roby</h3>
                        <p className="footer__description">New collection of shoes 2022.</p>
                    </div>
                    <div className="footer__box">
                        <h3 className="footer__title">EXPLORE</h3>
                        <ul>
                            <li><a href="#" className="footer__link">Home</a></li>
                            <li><a href="#featured" className="footer__link">Featured</a></li>
                            <li><a href="#women" className="footer__link">Women</a></li>
                            <li><a href="#new" className="footer__link">New</a></li>
                        </ul>
                    </div>
                    <div className="footer__box">
                        <h3 className="footer__title">SUPPORT</h3>
                        <ul>
                            <li><a href="#" className="footer__link">Product Help</a></li>
                            <li><a href="#" className="footer__link">Custom Care</a></li>
                            <li><a href="#" className="footer__link">Authorized service</a></li>
                        </ul>
                    </div>
                    <div className="footer__box">
                        <a href="#" className="footer__social"><i className='bx bxl-facebook'></i></a>
                        <a href="#" className="footer__social"><i className='bx bxl-instagram'></i></a>
                        <a href="#" className="footer__social"><i className='bx bxl-twitter'></i></a>
                        <a href="#" className="footer__social"><i className='bx bxl-google'></i></a>
                    </div>
                </div>
            </footer>
                {/* <Header />
                <Nav />
                { children }
                <Footer /> */}
        </Router>
    );
};
export default Layout