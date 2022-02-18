import {
  SET_PAGE_INDEX,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  pageIndex: 0,
  items: [],
};
const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: payload.data,
        featuredItems: payload.data.filter(item => item.modelid === "airjordan1high"),
        womenItems: payload.data.filter(item => item.modelid === "dunklow"),
        newItems: payload.data.filter(item => item.modelid === "yeezyboost350"),
        homeItem: payload.data[0]
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: payload.index,
      };
    default:
      return state;
  }
};
export default products;
