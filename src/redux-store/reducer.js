//INC
//DEC
//RESET
import { Increment, Decrement, Reset } from "./action";

const initialState = { count: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Increment:
      return {
        ...state,
        count: state.count + action.payload
      };
    case Decrement:
      return {
        ...state,
        count: state.count - 1
      };
    case Reset:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
