import classes from "./count.module.css";
const Counter = () => {
  return (
    <main className={classes.primary}>
      <aside>
        <h1>counter app</h1>
        <h2>
          count :<span>0</span>
        </h2>
      </aside>
      <nav>
        <button>add</button>
        <button>minus</button>
        <button>add when odd</button>
      </nav>
    </main>
  );
};
export default Counter;
