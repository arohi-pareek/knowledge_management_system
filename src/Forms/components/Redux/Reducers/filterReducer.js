import { CLOSE_DRAWER, OPEN_DRAWER } from "../Constant/ActionTypes";

const initialState = {
    isDrawerOpen: false,
    // other state properties
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_DRAWER:
        return {
          ...state,
          isDrawerOpen: true,
        };
      case CLOSE_DRAWER:
        return {
          ...state,
          isDrawerOpen: false,
        };
      // other reducers
      default:
        return state;
    }
  };

  export default filterReducer;

  