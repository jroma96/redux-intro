import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const customerInitialState = {
  fullName: "",
  nationalId: 0,
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: customerInitialState,
  reducers: {
    createCustomer: {
      reducer: (
        state,
        action: PayloadAction<{
          fullName: string;
          nationalId: number;
          createdAt: string;
        }>,
      ) => {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = new Date().toISOString();
      },
      prepare(fullName: string, nationalId: number) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
    updateFullName: (state, action: PayloadAction<{ fullName: string }>) => {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateFullName } = customerSlice.actions;
export default customerSlice;
