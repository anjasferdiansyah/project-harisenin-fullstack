import { ADD_TO_CART, ADD_TO_CART_FAILURE, FETCH_CART, FETCH_CART_FAILURE, REMOVE_FROM_CART, REMOVE_FROM_CART_FAILURE } from '../types';

const initialState = {
  items: [],
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.some(item => item.productId === action.payload.productId)
          ? state.items.map(item =>
              item.productId === action.payload.productId ? { ...item, qty: item.qty + action.payload.qty } : item
            )
          : [...state.items, action.payload],
        error: null,
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_CART:
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    case FETCH_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.productId !== action.payload),
        error: null,
      };
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
