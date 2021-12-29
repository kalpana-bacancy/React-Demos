import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'
import { counterActions } from '../store/counter'

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter)
  const showCounter = useSelector((state) => state.counter.showCounter)
  const dispatch = useDispatch()
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter;
