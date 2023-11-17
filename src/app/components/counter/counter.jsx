import { useState } from "react";
import classes from "./counter.module.css";
export default function Count() {
  const [count, setcount] = useState(0);

  // function ADD
  const handleAdd = () => {
    setcount(count + 1);
  };

  // function MINUS
  const handleMinus = () => {
    setcount(count - 1);
  };

  // function ADD when ODD
  const handleWhenOdd = () => {
    if (count % 2 === 1) {
      setcount(count + 1);
    }
  };

  return (
    <section className={classes.primary}>
      <h1 className={classes.primary__h1}>Counter App</h1>
      <h2 className={classes.primary__h2}>
        Count : <span className={classes.primary__span}>{count}</span>
      </h2>
      <div className={classes.secondary}>
        <button className={classes.secondary__buttons} onClick={handleAdd}>
          ADD
        </button>
        <button className={classes.secondary__buttons} onClick={handleMinus}>
          MINUS
        </button>
        <button className={classes.secondary__buttons} onClick={handleWhenOdd}>
          ADD when ODD
        </button>
      </div>
    </section>
  );
}