import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant/constant";
export const cartReducer = (state = { cartIteams: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const iteam = action.payload;
      const exist = state.cartIteams.find((product) => product.id === iteam.id);
      if (exist) {
        return {
          ...state,
          cartIteams: state.cartIteams.map((data) =>
            data.product === iteam.product ? iteam : data
          ),
        };
      } else {
        return { ...state, cartIteams: [...state.cartIteams, iteam] };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartIteams: state.cartIteams.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
