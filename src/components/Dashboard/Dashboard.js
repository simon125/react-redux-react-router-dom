import React from "react";
import { useSelector } from "react-redux";
import { selectCounterValue } from "../Counter/counterSlice";
import { selectCounterWithInputValue } from "../CounterWithInput/counterWithInputSlice";

export const Dashboard = () => {
  const counter = useSelector(selectCounterValue);
  const counterWithInput = useSelector(selectCounterWithInputValue);

  return (
    <article>
      <h3>Dashboard</h3>
      <p>
        Counter value: <b>{counter}</b>
      </p>
      <p>
        Counter with input value: <b>{counterWithInput}</b>
      </p>
    </article>
  );
};
