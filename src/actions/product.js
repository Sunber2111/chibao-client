import { FETCH_PRODUCTS, EDIT_INVENTORY_SUCCESS } from "../constant/AlertTypes";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api";

//Fetch data
export const fetch_data = (page, limit) => async (dispatch) => {
  try {
    const res = await axios.get(`/products?page=${page}&limit=${limit}`);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const fetch_data_all = () => async (dispatch) => {
  try {
    const res = await axios.get(`/products`);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
//  Edit inventory products
export const edit_inventory = ({ quantity }, id) => async (dispatch) => {
  const body = JSON.stringify({ quantity });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/products/edit/inventory/${id}`, body, config);
    dispatch({
      type: EDIT_INVENTORY_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
