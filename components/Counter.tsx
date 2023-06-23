import React from "react";
import * as ACTION from "@/store/store";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);

  const handleClick = (e) => {
    switch (e.target.name) {
      case "div2":
        dispatch(ACTION.div_two());
        break;
      case "sub1":
        dispatch(ACTION.sub_one());
        break;
      case "add1":
        dispatch(ACTION.add_one());
        break;
      case "mul2":
        dispatch(ACTION.mul_two());
        break;
      default:
        break;
    }
  };

  return (
    <div className="counter">
      <div className="counter-header">Counter</div>
      <div className="counter-content">{number}</div>
      <div className="counter-footer">
        <button name="div2" onClick={handleClick}>
          / 2
        </button>
        <button name="sub1" onClick={handleClick}>
          - 1
        </button>
        <button name="add1" onClick={handleClick}>
          + 1
        </button>
        <button name="mul2" onClick={handleClick}>
          x 2
        </button>
      </div>
    </div>
  );
}
