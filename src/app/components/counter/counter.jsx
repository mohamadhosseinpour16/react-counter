import classes from './counter.module.css'
export default function Count() {
  return (
    <section className={classes.primary}>
      <h1 className={classes.primary__h1}>Counter App</h1>
      <h2 className={classes.primary__h2}>
        Count : <span className={classes.primary__span}>0</span>
      </h2>
      <div className={classes.secondary}>
        <button className={classes.secondary__buttons}>ADD</button>
        <button className={classes.secondary__buttons}>MINUS</button>
        <button className={classes.secondary__buttons}>ADD when ODD</button>
      </div>
    </section>
  );
}