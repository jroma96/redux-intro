import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: accountInitialState,
  reducers: {
    deposit: (state, action: PayloadAction<{ amount: number }>) => {
      state.balance = state.balance + action.payload.amount;
    },
    withdraw: (state, action: PayloadAction<{ amount: number }>) => {
      state.balance = state.balance - action.payload.amount;
    },
    requestLoan: (
      state,
      action: PayloadAction<{ amount: number; purpose: string }>,
    ) => {
      if (state.loan > 0) return;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance = state.balance + action.payload.amount;
    },
    payLoan: (state) => {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance = state.balance - state.loan;
    },
  },
});
export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice;
