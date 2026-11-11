import { useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((store) => store.counter.counterValue);
  console.log(counter);

  return <h2>Counter is {counter}</h2>;
}

export default Counter;
