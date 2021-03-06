import {
    LOGIN, 
    LOGOUT,
    UPDATE
} from '../actions/actionTypes'

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null, 
    error : null
};
const user = (state = initialState, {type, payload}) => { 
    switch (type) { 
        case LOGIN:
            if (state.user) { return state } 
            return {
                user: payload.user, 
                error: payload.error, 
            }
        case UPDATE:
            return {
                user: payload.user, 
                error: payload.error, 
                message: payload.message, 
        }
        case LOGOUT: return { user: null, error: null }
    default:
      return state;
    } 
}
export default user