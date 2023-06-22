// actionTypes
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

// actions
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

// reducer
const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
