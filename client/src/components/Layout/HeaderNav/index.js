import { useState, useEffect } from 'react';  
import { useSelector } from 'react-redux';
import './nav.scss';
import IconButton from '../../IconButton';
import Modal from '../../Modal';
import Login from '../../Auth/Login';

const Header = () => {
    const [ showMenu, setShowMenu ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);
	const { section } = useSelector(state => state.section);	
    const [ scrollHeader, setScrollHeader ] = useState(false);
    const { user } = useSelector(state => state.user);
	const { items } = useSelector(state => ({...state.cart}));
    const quantity = items.length > 0 ? items.length : "";

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 200) setScrollHeader(true); else setScrollHeader(false);
        })
    }, []);

    return (
        <header className={`l-header ${scrollHeader? "scroll-header" : ""}`} id="header">
            <nav className="nav bd-grid">
                <IconButton onClick={() => setShowMenu(!showMenu)}>
                    <i className='bx bxs-grid'></i>
                </IconButton>

                <a href="/" className="nav__logo">Roby</a>

                <div className={`nav__menu ${showMenu ? "show" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        {
                            [
                                {route: "/#", name: "Home"},
                                {route: "/#featured", name: "Featured"},
                                {route: "/#women", name: "Women"},
                                {route: "/#new", name: "New"},
                                {route: "/shop", name: "Shop"},
                            ].map(element => (
                                <li className="nav__item" key={element.route}>
                                    <a 
                                        href={element.route} 
                                        className={`nav__link ${section === element.name.toLowerCase() ? "active" : ""}`} 
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {element.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="nav__icon">
                    <IconButton href="/cart">
                        <div>
                            <i className='bx bx-shopping-bag' ></i>
                            <span className="badge badge-primary">{quantity}</span>
                        </div>
                    </IconButton>
                    <IconButton onClick={() => setShowModal(!showModal)}>
                        <i className='bx bx-user'></i>
                    </IconButton>
                </div>

            </nav>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <Login />
            </Modal>
        </header>
    );
};
export default Header;