import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(11);

  const incrementCounterByOne = () => {
    const nextRenderValue = counterValueFromCurrentRender + 1;
    console.log("current render value:", counterValueFromCurrentRender);
    queueRerenderWithNewCounterValue(nextRenderValue);
    console.log(
      "queued a rerender with value of",
      nextRenderValue,
      "... although current render value is still",
      counterValueFromCurrentRender
    );
  };

  console.log("Component is rendering with a counter value of", counterValueFromCurrentRender);

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={incrementCounterByOne}>+1 to value</button>
    </>
  );
}

export default CounterDemo;
