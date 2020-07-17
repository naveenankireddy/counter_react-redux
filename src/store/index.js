import { createStore } from "redux";
import { INCREMENT, DECREMENT, RESET } from "./types";

const initializeState = {
  count: 34560,
  max: 50,
  step: 2,
};

function reducer(state = initializeState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return {...state,count:0};
    default:
      return state;
  }
}

export const store = createStore(reducer);
