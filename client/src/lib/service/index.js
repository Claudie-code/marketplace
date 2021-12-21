import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

// GET

export const getProducts = () => {
    return new Promise((onSuccess, onFail) => {
        axios
        .get('http://localhost:5000/api/products')
        .then((response, error) => {
            if(!response || error) {
                return onFail(`Response failure : ${error}`);
            }
            onSuccess(response);
        })
        .catch((error) => { onFail(error) } );
    })
};

export const getUser = (body) => {
    return new Promise((onSuccess, onFail) => {
        axios
        .get('http://localhost:5000/api/user', body.email)
        .then((response, error) => {
            if(!response || error) {
                return onFail(`Response failure : ${error}`);
            }
            onSuccess(response.data);
        })
        .catch((error) => { onFail(error) } );
    })
};

//POST

export const addUser = (body) => {
    return new Promise((onSuccess, onFail) => {
        axios
        .post('http://localhost:5000/api/users/add', body)
        .then((response, error) => {
            if(!response || error) {
                return onFail(`Response failure : ${error}`);
            }
            onSuccess(`user profile successfully created`);
        })
    })
};

//stripe
export const processPayment = async (order) => {
    const stripePromise = loadStripe("pk_test_51K8qTxLNxGBQ5EoL7wAG3nZ7wl5AvGdB3vHWBeipCA185lz2L52RYh6ivkem8n6uWTJcIbjqFuoDRtaBwCMwoH3n00mJLzD4aW");
    const stripe = await stripePromise;
    axios
    .post('http://localhost:5000/api/create-checkout-session', order)
    .then((response, error) => {
        return stripe.redirectToCheckout({ sessionId: response.data.id })
    })
};