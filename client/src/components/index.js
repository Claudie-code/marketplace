import React, { useEffect } from 'react';  
import { Route } from "react-router-dom";
import Home from './Home'
import About from './Misc/About'
import Help from './Misc/Help'
import Deals from './Misc/Deals'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Confirmation from './Auth/Confirmation'
import Checkout from './Checkout'
import Success from './Checkout/Success'
import Cancel from './Checkout/Cancel'
import Cart from './Cart'
import Account from './Account';
import Layout from './Layout'
import Shop from './Shop'
import useAuthentication from '../lib/hooks/useAuthentication';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { handleAuthentication } = useAuthentication(dispatch);
  
  useEffect(() => {
    handleAuthentication();
  }, []);

  return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/deals" component={Deals} />
      
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/confirmation" component={Confirmation} />
      
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/success" component={Success} />
        <Route path="/cancel" component={Cancel} />
      </Layout>
  );
}
export default App;
