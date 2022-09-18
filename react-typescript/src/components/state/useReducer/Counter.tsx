import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;
// Atau
// {
//   type: "increment" | "decrement" | "reset";
//   payload?: number;
// };

type CounterProps = {
  increment: number;
  decrement: number;
};

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload || 0) }; // karna payloadnya pake ?
    case "decrement":
      return { count: state.count - (action.payload || 0) };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const Counter = (props: CounterProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count: {state.count}</div>
      <button
        onClick={() =>
          dispatch({ type: "increment", payload: props.increment })
        }
      >
        Increment {props.increment}
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrement", payload: props.decrement })
        }
      >
        Decrement {props.decrement}
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
