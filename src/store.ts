import accountSlice from "./Features/Accounts/AccountSlice";
import customerReducer from "./Features/Customers/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    customer: customerReducer.reducer,
  },
});

export default store;
