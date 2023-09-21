import Axios from "axios";
import { GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS } from "../Constant/ActionTypes";

export const createAccount = (value) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: GET_CITY_REQUEST });
  try {
    const response = await Axios.post(`/crm/api/addAccount`, value, config);
    dispatch({ type: GET_CITY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CITY_FAILURE, payload: error });
  }
};