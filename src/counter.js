import { useSelector, useDispatch } from "react-redux";
import {
  dispatchIncrement,
  dispatchDecrement,
  dispatchReset
} from "./redux-store/action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter App</h1>
      <b>Data:{count}</b>
      <div className="btn-grp">
        <button onClick={() => dispatch(dispatchIncrement(4))}>
          Increment
        </button>
        <button onClick={() => dispatch(dispatchDecrement())}>Decrement</button>
        <button onClick={() => dispatch(dispatchReset())}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
