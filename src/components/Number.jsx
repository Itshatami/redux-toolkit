import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectNumber ,increment ,decrement} from "../features/number/numberSlice";


function Number() {
  const [value, setValue] = useState(2);

  const dispatch = useDispatch();
  const number = useSelector(selectNumber);
  console.log(number);

  return (
    <div>
      <h2>Number is {number}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(+value))}>Increment By Amount</button> */}
    </div>
  );
}

export default Number;
