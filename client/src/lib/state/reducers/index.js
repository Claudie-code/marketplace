import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import user from "./user";
import models from "./models";
import brands from "./brands";
import section from "./section";

const reducers = combineReducers({
  user,
  cart, 
  products, 
  brands,
  models,
  section
});

export default reducers;
