import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import counterWithInputReducer from "../components/CounterWithInput/counterWithInputSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterWithInput: counterWithInputReducer,
  },
});
