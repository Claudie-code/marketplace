import { LOGIN, LOGOUT, UPDATE } from './actionTypes';

export const handleAuthenticationError = (err) => {
    return { 
        type: LOGIN,
        payload: {user: null, error: err}
    };
};

export const handleUpdateError = (err) => {
    return { 
        type: UPDATE,
        payload: {error: err}
    };
};

export const handleLogin = (user) => {
    return { 
        type: LOGIN,
        payload: {user: user, error: null}
    };
};

export const handleUpdate = (user, message) => {
    return { 
        type: UPDATE,
        payload: {user: user, error: null, message: message}
    };
};

export const handleLogout = () => {
    return { 
        type: LOGOUT,
    };
};