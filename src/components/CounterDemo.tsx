import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [currentRenderCounterValue, queueRerenderWithNewCounterValue] =
    useState(11);

  const incrementCounter = () => {
    const nextRenderValue = currentRenderCounterValue + 1;
    console.log("current render value:", currentRenderCounterValue);
    queueRerenderWithNewCounterValue(nextRenderValue);
    console.log(
      "queued a rerender with value of",
      nextRenderValue,
      "... although current render value is still",
      currentRenderCounterValue
    );
  };

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {currentRenderCounterValue}</p>
      <button onClick={incrementCounter}>+1 to value</button>
    </>
  );
}

export default CounterDemo;
