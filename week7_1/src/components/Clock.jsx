import React, { useState } from "react";

function Clock() {
  const [counter, setCounter] = useState(1);
 
  function startbtn() {
    setInterval(function () {
      setCounter((counter) => counter + 1);
    }, 1000);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <br />
      <button onClick={startbtn}> Start </button>
    </div>
  );
}

export default Clock;
