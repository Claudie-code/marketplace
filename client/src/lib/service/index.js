import axios from 'axios';

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