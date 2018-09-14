import types from "./types";

const initialState = {
  clicks: 0,
  value: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        clicks: state.clicks + 1,
        value: state.value + 1
      };
    case types.DECREMENT:
      return {
        clicks: state.clicks + 1,
        value: state.value - 1
      };
    default:
      return state;
  }
};

export default counter;
