import { LOGIN, LOGOUT } from './actionTypes';

export const handleAuthenticationError = (err) => {
    return { 
        type: LOGIN,
        payload: {user: null, error: err}
    };
};

export const handleLogin = (user) => {
    console.log("handle",user)
    return { 
        type: LOGIN,
        payload: {user: user, error: null}
    };
};

export const handleLogout = () => {
    return { 
        type: LOGOUT,
    };
};