import types from "./types";

/**
 * increment: increments the counter
 */
export const increment = () => {
  return {
    type: types.INCREMENT
  };
};

/**
 * decrement: decerements the counter
 */
export const decrement = () => {
  return {
    type: types.DECREMENT
  };
};
