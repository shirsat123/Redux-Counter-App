export const Increment = "Increment";
export const Decrement = "Decrement";
export const Reset = "Reset";

export const dispatchIncrement = (incby) => ({
  type: Increment,
  payload: incby
});

export const dispatchDecrement = () => ({
  type: Decrement
});

export const dispatchReset = () => ({
  type: Reset
});
