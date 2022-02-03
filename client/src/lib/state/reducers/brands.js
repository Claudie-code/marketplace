import {
  SET_PAGE_INDEX,
  GET_BRANDS_PENDING,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  pageIndex: 0,
  items: [],
};
const brands = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRANDS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: payload.data,
      };
    case GET_BRANDS_FAILURE:
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
export default brands;
