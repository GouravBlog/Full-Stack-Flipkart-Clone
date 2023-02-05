import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import Reduxthunk from "redux-thunk";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/cartReducer";
const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});
const middleware = [Reduxthunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
