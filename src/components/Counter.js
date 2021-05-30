import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
import {counterActions} from "../store";

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const incrementHandlerBy = (value) => {
    dispatch(counterActions.incrementBy(value))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerBy.bind(null, 5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
