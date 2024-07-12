import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 5;
  const addValue = () => {
    console.log("counter value", counter + 1);
    // counter = counter + 1;
    if (counter < 20) setCounter(counter + 1);
    else alert("error");
    // console.log("value added", Math.random());
  };
  const subValue = () => {
    console.log("counter value", counter - 1);
    // counter = counter + 1;
    if (counter > 0) setCounter(counter - 1);
    else alert("error");
    // console.log("value added", Math.random());
  };

  return (
    <>
      <h1>CLICK COUNTER</h1>
      <h2>counter value is :{counter} </h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={subValue}>Remove value</button>
    </>
  );
}

export default App;
