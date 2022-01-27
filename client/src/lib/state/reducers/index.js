import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import user from "./user";
import section from "./section";

const reducers = combineReducers({
  user,
  cart, 
  products, 
  section
});

export default reducers;
