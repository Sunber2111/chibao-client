import {
  PAYMENT_SUCCESS,
  PAYMENT_ERROR,
  GET_CHECKOUT,
} from "../constant/AlertTypes";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api";
//payment
export const payment = (hd) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(hd);
  try {
    await axios.post("/checkout", body, config);
    dispatch({
      type: PAYMENT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PAYMENT_ERROR,
    });
  }
};

//Get Checkout by user
export const getCheckout = () => async (dispatch) => {
  try {
    const res = await axios.get("/checkout");
    dispatch({
      type: GET_CHECKOUT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
