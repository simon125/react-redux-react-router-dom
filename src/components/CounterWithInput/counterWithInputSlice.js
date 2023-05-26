import { createSlice } from "@reduxjs/toolkit";

export const counterWithInputSlice = createSlice({
  name: "counterWithInput",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const selectCounterWithInputValue = (state) =>
  state.counterWithInput.value;

export const { decrease, increase } = counterWithInputSlice.actions;

export default counterWithInputSlice.reducer;
