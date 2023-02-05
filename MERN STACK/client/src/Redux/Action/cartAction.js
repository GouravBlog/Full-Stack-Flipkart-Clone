import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_FROM_CART,
} from "../Constant/constant";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/api/product/${id}`);
    dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: error.message });
  }
};
export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};
