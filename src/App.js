import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Disp from "./components/Disp";
import btnContainer from "./components/btnContainer";

function App() {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const sub = () => {
    if (count === 0) alert("Number can't be negative!");
    else setCount(count - 1);
  };
  const reset = () => setCount(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Disp text={"Counter: " + count} />
        <Button handler={add} text="+" bgclr="green" />
        <Button handler={sub} text="-" bgclr="red" />
        <Button handler={reset} text="reset" bgclr="indigo" />
      </header>
    </div>
  );
}

export default App;
