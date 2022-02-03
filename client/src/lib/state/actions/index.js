import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART,
  SET_PAGE_INDEX,
  GET_PRODUCTS_PENDING, 
  GET_PRODUCTS_SUCCESS, 
  GET_PRODUCTS_FAILURE,
  GET_BRANDS_PENDING, 
  GET_BRANDS_SUCCESS, 
  GET_BRANDS_FAILURE,
  GET_MODELS_PENDING, 
  GET_MODELS_SUCCESS, 
  GET_MODELS_FAILURE,
  UPDATE_CART,
  CHECKOUT, 
  SET_DELIVERY_CHOICE
} from './actionTypes';
import { getProducts, addOrder } from '../../service';

export function getProductsPending() { 
  return {
    type: GET_PRODUCTS_PENDING
  };
}
export function getProductsSuccess(data) { 
  return {
    type: GET_PRODUCTS_SUCCESS, 
     payload: { data }
  };
}
export function getProductsFailure(error) { 
 return {
    type: GET_PRODUCTS_FAILURE, 
     payload: { error }
  };
}

export function getBrandsPending() { 
  return {
    type: GET_BRANDS_PENDING
  };
}
export function getBrandsSuccess(data) { 
  return {
    type: GET_BRANDS_SUCCESS, 
     payload: { data }
  };
}
export function getBrandsFailure(error) { 
 return {
    type: GET_BRANDS_FAILURE, 
     payload: { error }
  };
}

export function getModelsPending() { 
  return {
    type: GET_MODELS_PENDING
  };
}
export function getModelsSuccess(data) { 
  return {
    type: GET_MODELS_SUCCESS, 
     payload: { data }
  };
}
export function getModelsFailure(error) { 
 return {
    type: GET_MODELS_FAILURE, 
     payload: { error }
  };
}
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: { product }
  };
}
export function updateCart(id, quantity) { 
  return {
    type: UPDATE_CART,
    payload: { id, quantity }
  };
}
export function setDelivery(choice) { 
  return {
    type: SET_DELIVERY_CHOICE,
    payload: { choice }
  };
}
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: { id }
  };
}
export function checkout() { 
  return {
    type: CHECKOUT
  };
}
export function setPage(index) {
  return {
    type: SET_PAGE_INDEX,
    payload: { index }
  };
}

// Networking - MongoDB
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsPending);
    getProducts()
    .then(response => dispatch(getProductsSuccess(response.data)))
    .catch(error => dispatch(getProductsFailure(error)));
  };
};

export const fetchBrands = () => {
  return async (dispatch) => {
    dispatch(getBrandsPending);
    getBrands()
    .then(response => dispatch(getBrandsSuccess(response.data)))
    .catch(error => dispatch(getBrandsFailure(error)));
  };
};

export const fetchModels = () => {
  return async (dispatch) => {
    dispatch(getBrandsPending);
    getModels()
    .then(response => dispatch(getModelsSuccess(response.data)))
    .catch(error => dispatch(getModelsFailure(error)));
  };
};

export const saveOrder = (order) => {
  return async (dispatch) => {
    addOrder(order)
    .then(() => dispatch(checkout()))
    .catch(error => console.log(error));
  };
};

