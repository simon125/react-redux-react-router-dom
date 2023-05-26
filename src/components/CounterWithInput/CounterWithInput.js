import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  selectCounterWithInputValue,
} from "./counterWithInputSlice";

export const CounterWithInput = () => {
  const [value, setValue] = useState(0);
  const counterWithInput = useSelector(selectCounterWithInputValue);

  const dispatch = useDispatch();

  return (
    <article>
      <h3>Counter With Input: {counterWithInput}</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <button
          onClick={() => {
            dispatch(increase(Number(value)));
          }}
        >
          +
        </button>
        <input
          type="text"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <button
          onClick={() => {
            dispatch(decrease(Number(value)));
          }}
        >
          -
        </button>
      </div>
    </article>
  );
};
