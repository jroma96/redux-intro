import { createStore, combineReducers, applyMiddleware } from "redux";
import accountReducer from "./Features/Accounts/AccountSlice";
import customerReducer from "./Features/Customers/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export default store;
