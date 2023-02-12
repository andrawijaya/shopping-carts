import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProductCount,
  removeProductCount,
} from "../../store/action/productAction";

const Counter = ({ id, numberItem, displayMobile }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(addProductCount(id));
  };

  const decrement = () => {
    dispatch(removeProductCount(id));
  };

  const container = `flex ${displayMobile}`;

  return (
    <div className={container}>
      {numberItem > 1 ? (
        <button
          onClick={decrement}
          className="border-2 border-grey-300 w-12  text-center  hover:text-blue-600 hover:cursor-pointer hover:scale-110 hover:border-blue-600"
        >
          -
        </button>
      ) : (
        ""
      )}
      <div className="border-2 border-grey-300 w-12 text-center ">
        {numberItem}
      </div>
      <button
        onClick={increment}
        className="border-2 border-grey-300 w-12 text-center hover:text-blue-600 hover:cursor-pointer hover:scale-110 hover:border-blue-600"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
