import React from "react";
import Counter from "@/components/Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "counter/div_two":
      return { ...state, number: Math.floor(state.number / 2) };
    case "counter/sub_one":
      return { ...state, number: state.number - 1 };
    case "counter/add_one":
      return { ...state, number: state.number + 1 };
    case "counter/mul_two":
      return { ...state, number: state.number + state.number };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export const div_two = () => ({
  type: "counter/div_two",
});

export const sub_one = () => ({
  type: "counter/sub_one",
});

export const add_one = () => ({
  type: "counter/add_one",
});

export const mul_two = () => ({
  type: "counter/mul_two",
});

export default function CounterContainer() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
