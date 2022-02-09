import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

// GET
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
});

export const getProducts = () => {
    return new Promise((onSuccess, onFail) => {
        axiosInstance
        .get('/products')
        .then((response, error) => {
            if(!response || error) {
                return onFail(`Response failure : ${error}`);
            }
            onSuccess(response);
        })
        .catch((error) => { onFail(error) } );
    })
};

export const getModels = () => {
    return new Promise((onSuccess, onFail) => {
        axiosInstance
        .get('/models')
        .then((response, error) => {
            if(!response || error) {
                return onFail(`Response failure : ${error}`);
            }
            onSuccess(response);
        })
        .catch((error) => { onFail(error) } );
    })
};

export const getBrands = () => {
    return new Promise((onSuccess, onFail) => {
        axiosInstance
        .get('/brands')
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
        axiosInstance
        .get('/user', body.email)
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
        axiosInstance
        .post('/users/add', body)
        .then((response, error) => {
            if(!response || error) {
                return onFail(`Response failure : ${error}`);
            }
            onSuccess(`user profile successfully created`);
        })
    })
};

export const updateUser = (body) => {
    return new Promise((onSuccess, onFail) => {
        axiosInstance
        .post('/users/update', body)
        .then((response, error) => {
            if(!response || error) {
                return onFail(`Response failure : ${error}`);
            }
            onSuccess(`user profile successfully updated`);
        })
    })
};

export const addOrder = (body) => {
    return new Promise((onSuccess, onFail) => {
        axiosInstance
        .post('/orders/add', body)
        .then((response, error) => {
            if(!response || error) {
                return onFail(`Response failure : ${error}`);
            }
            onSuccess(`order successfully saved`);
        })
        .catch((err) => onFail(err));
    })
};

//stripe
export const processPayment = async (order) => {
    const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);
    const stripe = await stripePromise;
    axiosInstance
    .post('/create-checkout-session', order)
    .then((response, error) => {
        return stripe.redirectToCheckout({ sessionId: response.data.id })
    })
};