import Axios from "axios";
import {
  GET_COURSE_FAILURE,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  SET_SNACKBAR,
  SUBSCRIBE_COURSE__SUCCESS,
} from "../Constant/ActionTypes";

export const AddCourse = (value) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: GET_COURSE_REQUEST });
  try {
    const response = await Axios.post(`/course/add-course`, value, config);
    dispatch({ type: GET_COURSE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_COURSE_FAILURE, payload: error });
  }
};

export const setSnackbar = (
  snackbarOpen,
  snackbarType = "success",
  snackbarMessage = ""
) => ({
  type: SET_SNACKBAR,
  snackbarOpen,
  snackbarType,
  snackbarMessage,
});

export const subscribe = (payload) => ({
  type: SUBSCRIBE_COURSE__SUCCESS,
  payload: payload,
});

