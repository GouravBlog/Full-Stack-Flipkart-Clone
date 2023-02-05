import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAIL_REQ,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_REFRESH,
} from "../Constant/constant";
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQ:
      return { loading: true };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case GET_PRODUCT_DETAIL_REFRESH:
      return { product: {} };
    default:
      return state;
  }
};
