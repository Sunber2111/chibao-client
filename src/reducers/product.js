import { FETCH_PRODUCTS, EDIT_INVENTORY_SUCCESS } from "../constant/AlertTypes";
const initiaState = {
  products: [],
  totalPage: null,
};

const product = (state = initiaState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload.results,
        totalPage: payload.totals,
      };
    case EDIT_INVENTORY_SUCCESS:
      return { ...state };
    default:
      return { ...state };
  }
};
export default product;
