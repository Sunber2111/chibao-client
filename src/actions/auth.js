import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constant/AlertTypes";
import setAuthToken from "../utils/setAuthToken";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5000/api";
// Login
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    toast.success("Đăng Nhập Thành Công!!!");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((er) => {
        toast.warning(er.msg);
      });
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/auth");

    dispatch({
      type: USER_LOAD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
// Register
export const register = ({
  name,
  email,
  password,
  phone,
  address,
  dis,
  city,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    name,
    email,
    password,
    phone,
    address,
    dis,
    city,
  });
  try {
    const res = await axios.post("/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    toast.success("Tạo Tài Khoản Thành Công!!!");
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((er) => {
        toast.warning(er.msg);
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
