import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_CART_FAILURE,
  FETCH_CART,
  FETCH_CART_FAILURE,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_FAILURE,
  INCREMENT_QTY,
  DECREMENT_QTY,
} from "../types";
import { mutate } from "swr";

export const addToCart = (token, productId, qty) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/cart/add",
      { productId, qty },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: ADD_TO_CART,
      payload: response.data,
    });
    mutate("http://localhost:5000/api/cart");
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const fetchCart = (token) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: FETCH_CART,
      payload: response.data,
    });
    mutate("http://localhost:3000/api/cart");
  } catch (error) {
    dispatch({
      type: FETCH_CART_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const removeFromCart = (token, productId) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/cart/remove`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          productId,
        },
      }
    );
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
    mutate("http://localhost:5000/api/cart");
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_CART_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const incrementQty = (token, productId) => async (dispatch) => {
  try {
    const response = await axios.put(
      "http://localhost:5000/api/cart/increment",
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: INCREMENT_QTY,
      payload: response.data,
    });

    mutate("http://localhost:5000/api/cart");
  } catch (error) {
    console.error("Error incrementing quantity:", error);
  }
};

export const decrementQty = (token, productId) => async (dispatch) => {
  try {
    const response = await axios.put(
      "http://localhost:5000/api/cart/decrement",
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: DECREMENT_QTY,
      payload: response.data,
    });
    mutate("http://localhost:5000/api/cart");
  } catch (error) {
    console.error("Error decrementing quantity:", error);
  }
};
