
import { GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS } from "../Constant/ActionTypes";

const countryData = {
  loading: false,
  error: "",
  countryCitiesData: [],
};

export const createAccount = (state = countryData, action) => {
  switch (action.type) {
    case GET_CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        countryCitiesData: action.payload,
      };
    case GET_CITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
