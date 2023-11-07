import { SET_SEARCH_QUERY } from "../Constant/ActionTypes";

const initialState = {
    searchQuery: '',
  };
  
  export const setSearchQuery = (searchQuery) => ({
    type: 'SET_SEARCH_QUERY',
    payload: searchQuery,
  });
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SEARCH_QUERY:
        return { ...state, searchQuery: action.payload };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  