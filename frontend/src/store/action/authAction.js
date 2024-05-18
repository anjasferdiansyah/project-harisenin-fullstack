// authActions.js

import axios from 'axios';
import { toast } from 'react-toastify';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userId, token) => ({
  type: LOGIN_SUCCESS,
  payload: { userId, token },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        { email, password }
      );

      if (response.status === 200) {
        const { token, userId } = response.data;
        sessionStorage.setItem('token', token);
        dispatch(loginSuccess(userId, token));
        toast.success('Login successful');
        setTimeout(() => {
            navigate('/');
          }, 2000);
      } else {
        dispatch(loginFailure('Login failed'));
        toast.error('Login failed');
      }
    } catch (error) {
        dispatch(loginFailure(error.message || 'An error occurred'));
        toast.error('Login failed');
    }
  };
};
