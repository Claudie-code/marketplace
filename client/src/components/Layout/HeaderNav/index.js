import { useState, useEffect } from 'react';  
import { useSelector } from 'react-redux';
import './nav.scss';
import IconButton from '../../IconButton';

const Header = () => {
    const [ show, setShow ] = useState(false);
	const { section } = useSelector(state => state.section);	
    const [ scrollHeader, setScrollHeader ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 200) setScrollHeader(true); else setScrollHeader(false);
        })
    }, []);

    return (
        <header className={`l-header ${scrollHeader? "scroll-header" : ""}`} id="header">
            <nav className="nav bd-grid">
                <IconButton onClick={() => setShow(!show)}>
                    <i className='bx bxs-grid'></i>
                </IconButton>

                <a href="/" className="nav__logo">Roby</a>

                <div className={`nav__menu ${show ? "show" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a 
                                href="/#" 
                                className={`nav__link ${section === "home" ? "active" : ""}`} 
                                onClick={() => setShow(!show)}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="/#featured" 
                                className={`nav__link ${section === "featured" ? "active" : ""}`} 
                                onClick={() => setShow(!show)}
                            >
                                Featured
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="/#women" 
                                className={`nav__link ${section === "women" ? "active" : ""}`} 
                                onClick={() => setShow(!show)}
                            >
                                Women
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="/#new" 
                                className={`nav__link ${section === "new" ? "active" : ""}`} 
                                onClick={() => setShow(!show)}
                            >
                                New
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="/shop" 
                                className={`nav__link ${section === "shop" ? "active" : ""}`} 
                                onClick={() => setShow(!show)}
                            >
                                Shop
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav__icon">
                    <IconButton>
                        <i className='bx bx-shopping-bag' ></i>
                    </IconButton>
                    <IconButton>
                        <i className='bx bx-user'></i>
                    </IconButton>
                </div>

            </nav>
        </header>
    );
};
export default Header;