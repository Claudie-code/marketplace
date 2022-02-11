import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import user from "./user";
import models from "./models";
import brands from "./brands";

const reducers = combineReducers({
  user,
  cart, 
  products, 
  brands,
  models,
});

export default reducers;
