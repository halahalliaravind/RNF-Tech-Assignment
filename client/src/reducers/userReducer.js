import {
    RESET_USER,
   //  GET_USER,
    GET_USERS,
    TOGGLE_USERS_LOADING,
    TOGGLE_USER_LOADING
 } from "../actions/types";
 
 const initialState = {
    user: {},
    users: [],
    userLoading: false,
    usersLoading: false
 };
 
 export default function(state = initialState, action) {
    switch (action.type) {
       case GET_USERS:
          return {
             ...state,
             user: {},
             users: [...action.payload]
          };
       case GET_USER:
          return {
             ...state,
             user: { ...action.payload[0] }
          };
       case TOGGLE_USER_LOADING:
          return {
             ...state,
             postLoading: !state.postLoading
          };
       case TOGGLE_USERS_LOADING:
          return {
             ...state,
             postsLoading: !state.postsLoading
          };
       case RESET_USER:
          return initialState;
       default:
          return state;
    }
 }
 