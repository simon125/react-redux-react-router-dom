import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, selectCounterValue } from "./counterSlice";

export const Counter = () => {
  const counter = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  return (
    <article>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        -1
      </button>
    </article>
  );
};
