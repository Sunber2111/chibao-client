import { ADD_CART, DELETE_CART, UPDATE_CART } from "../constant/AlertTypes";

export const addcart = (product, quantity) => {
  return {
    type: ADD_CART,
    product,
    quantity,
  };
};
export const deletecart = (product) => {
  return {
    type: DELETE_CART,
    product,
  };
};
export const updatecart = (product, quantity) => {
  return {
    type: UPDATE_CART,
    product,
    quantity,
  };
};
