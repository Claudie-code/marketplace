import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Router> 
            <Header />
            { children }
            <Footer />
        </Router>
    );
};

export default Layout;