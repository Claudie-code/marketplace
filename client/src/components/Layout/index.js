import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from './HeaderNav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Router> 
            <HeaderNav />
            { children }
            <Footer /> 
                {/* <Header />
                <Nav /> */}
        </Router>
    );
};

export default Layout;