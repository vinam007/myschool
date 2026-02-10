import React from "react";
import { useSelector, useDispatch } from "react-redux";
 

function Counter() {
// const count = useSelector(state => state.counter.count); // read state
  const dispatch = useDispatch(); // dispatch actions

  return (
    <div>
      {/* <h1>Count: {count}</h1> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
export default Counter

 
const initialState = { count: 0 };

// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case DECREMENT:
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// actions.js

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
