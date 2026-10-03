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
    deposit: (state, action: PayloadAction<number>) => {
      state.balance = state.balance + action.payload;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      reducer: (
        state,
        action: PayloadAction<{ amount: number; purpose: string }>,
      ) => {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
      prepare(amount: number, purpose: string) {
        return {
          payload: { amount, purpose },
        };
      },
    },
    payLoan: (state) => {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});
export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice;
