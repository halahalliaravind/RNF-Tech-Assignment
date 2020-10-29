import axios from "axios";
import {
   // GET_USER,
   GET_USERS,
   TOGGLE_USERS_LOADING,
   TOGGLE_USER_LOADING,
   RESET_USER
} from "./types";

import { setErrors, clearErrors } from "./errorActions";

export const getPostByID = id => dispatch => {
   dispatch(toggleUserLoading());
   axios
      .get(`/api/users/fetch`)
      .then(res => {
         dispatch({
            type: GET_USERS,
            payload: res.data
         });
         dispatch(clearErrors());
         dispatch(toggleUserLoading());
      })

      .catch(err => {
         dispatch(setErrors(err.response.data));
         dispatch(toggleUserLoading());
      });
};

export const RESET_USER = () => {
   return {
      type: RESET_USER
   };
};

export const toggleUserLoading = () => {
   return {
      type: TOGGLE_USER_LOADING
   };
};

export const toggleUsersLoading = () => {
   return {
      type: TOGGLE_USERS_LOADING
   };
};
