import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
  };

  const handleReset = () => {
    queueRerenderWithNewCounterValue(0);
  };

  const handleAddFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 5);
  };

  const handleMinusFive = () =>{
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 5);
  };



  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOne}>+1</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
      <hr/>
      <button onClick={handleAddFive}>+5</button>
      <hr/>
      <button onClick={handleMinusFive}>-5</button>
    </>
  );
}

export default CounterDemo;
