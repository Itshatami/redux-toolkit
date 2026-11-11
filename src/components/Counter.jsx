import { useSelector, useDispatch } from "react-redux";
import { selectCounter } from "../features/counter/counterSlice";
import { increment, decrement } from "../features/counter/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  console.log(counter);

  return (
    <div>
      <h2>Counter is {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
