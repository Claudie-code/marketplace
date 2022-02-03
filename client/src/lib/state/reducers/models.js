import {
  SET_PAGE_INDEX,
  GET_MODELS_PENDING,
  GET_MODELS_SUCCESS,
  GET_MODELS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  pageIndex: 0,
  items: [],
};
const models = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MODELS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: payload.data,
      };
    case GET_MODELS_FAILURE:
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
export default models;
