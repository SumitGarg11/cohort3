import React from "react";
import useCounter from "./useCounter";

function Counter2() {
  const { count, increase } = useCounter();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter2;
