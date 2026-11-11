import { useSelector } from "react-redux";
import { selectCounter } from "../features/counter/counterSlice";

function Counter() {
  const counter = useSelector(selectCounter);
  console.log(counter);

  return <h2>Counter is {counter}</h2>;
}

export default Counter;
