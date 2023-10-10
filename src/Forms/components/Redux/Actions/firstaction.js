import Axios from "axios";
import {
  ADD_COURSE_FAILURE,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
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

  dispatch({ type: ADD_COURSE_REQUEST });
  try {
    const response = await Axios.post(`/course/add-course`, value, config);
    dispatch({ type: ADD_COURSE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_COURSE_FAILURE, payload: error });
  }
};

export const GetCourse = (value) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: GET_COURSE_REQUEST });
  try {
    const response = await Axios.get(`/course/get-courses`, value, config);
    console.log(response)
    dispatch({ type: GET_COURSE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_COURSE_FAILURE, payload: error });
  }
};

export const DeleteCourse = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: DELETE_COURSE_REQUEST });
  try {
    const response = await Axios.get(`/course/delete-course/${id}`, config);
    dispatch({ type: DELETE_COURSE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELETE_COURSE_FAILURE, payload: error });
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

