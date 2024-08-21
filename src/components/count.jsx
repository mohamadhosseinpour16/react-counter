import { useState } from "react";
import classes from "./count.module.css";
const Counter = () => {
  const [state, setState] = useState(0);
  // functions
  const addCount = () => {
    setState((prevState) => {
      return prevState + 1;
    });
  };
  const minusCount = () => {
    setState((prevState) => {
      return prevState - 1;
    });
  };
  const oddCount = () => {
    if (state % 2 === 1) {
      setState((prevState) => {
        return prevState + 1;
      });
    }
  };
  return (
    <main className={classes.primary}>
      <aside>
        <h1>counter app</h1>
        <h2>
          count : <span>{state}</span>
        </h2>
      </aside>
      <nav>
        <button onClick={addCount}>add</button>
        <button onClick={minusCount}>minus</button>
        <button onClick={oddCount}>add when odd</button>
      </nav>
    </main>
  );
};
export default Counter;
