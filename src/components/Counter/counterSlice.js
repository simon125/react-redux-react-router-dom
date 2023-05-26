import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCounterValue = (state) => state.counter.value;

export const { decrease, increase } = counterSlice.actions;

export default counterSlice.reducer;
