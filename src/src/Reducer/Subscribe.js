const initialState = {
  subsArr: [],
};

export const subscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "subscribe":
      return {
        ...state,
        subsArr: state.subsArr.concat(action.payload),
      };
    case "un-subscribe":
      return {
        ...state,
        subsArr: state.subsArr.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
