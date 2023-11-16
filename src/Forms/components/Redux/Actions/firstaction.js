import Axios from "axios";
import {
  ADD_CHAPTER_FAILURE,
  ADD_CHAPTER_REQUEST,
  ADD_CHAPTER_SUCCESS,
  ADD_COURSE_FAILURE,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_QUIZ_FAILURE,
  ADD_QUIZ_REQUEST,
  ADD_QUIZ_SUCCESS,
  ADD_UPLOAD_FAILURE,
  ADD_UPLOAD_REQUEST,
  ADD_UPLOAD_SUCCESS,
  DELETE_COURSE_FAILURE,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  GET_CHAPTER_FAILURE,
  GET_CHAPTER_REQUEST,
  GET_CHAPTER_SUCCESS,
  GET_COURSE_FAILURE,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  SET_SNACKBAR,
  SUBSCRIBE_COURSE__FAILURE,
  SUBSCRIBE_COURSE__REQUEST,
  SUBSCRIBE_COURSE__SUCCESS,
} from "../Constant/ActionTypes";

export const AddCourse = (value) => async (dispatch) => {
  const config = {
    headers: {
      // "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: ADD_COURSE_REQUEST });
  try {
    const response = await Axios.post(`/courses`, value, config);
    dispatch({ type: ADD_COURSE_SUCCESS, payload: response.data });
    dispatch(setSnackbar(true, "success", "Course Added Successfully"));
  } catch (error) {
    dispatch({ type: ADD_COURSE_FAILURE, payload: error });
    dispatch(setSnackbar(true, "error", "Error adding course "));
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
    const response = await Axios.get(`/courses?userId=6541df204297384ef7b27f32`, value, config);
    console.log(response);
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
    await Axios.delete(`/courses/${id}`, config);
    dispatch({ type: DELETE_COURSE_SUCCESS, payload: { deletedCourseId: id } });
    dispatch(setSnackbar(true, "success", "Course Deleted Successfully"));
  } catch (error) {
    dispatch({ type: DELETE_COURSE_FAILURE, payload: error });
    dispatch(setSnackbar(true, "error", "Error Deleting course"));
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

export const AddChapter = (value,id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: ADD_CHAPTER_REQUEST });
  try {
    const response = await Axios.post(`/courses/${id}/chapters`, value, config);
    dispatch({ type: ADD_CHAPTER_SUCCESS, payload: response.data });
    // Dispatch setSnackbar action to show a snackbar for success
    dispatch(setSnackbar(true, "success", "Chapter Added Successfully"));
  } catch (error) {
    dispatch({ type: ADD_CHAPTER_FAILURE, payload: error });
    dispatch(setSnackbar(true, "error", "Error adding chapter "));
  }
};

export const GetChapter = (value) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: GET_CHAPTER_REQUEST });
  try {
    const response = await Axios.get(
      `/courses/${value}/chapters`,
      value,
      config
    );
    console.log(response);
    dispatch({ type: GET_CHAPTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CHAPTER_FAILURE, payload: error });
  }
};

export const UploadPlayList =
  (formData, videoTitle,videoDesc, courseId,) => async (dispatch) => {
    const config = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
        sessionId: sessionStorage.getItem("sessionId"),
        chapterId: "6541eb32caeef04a1414b651",
        videoTitle:videoTitle,
        vidoDesc:videoDesc,
        courseId: courseId
      },
    };

    dispatch({ type: ADD_UPLOAD_REQUEST });
    try {
      const response = await Axios.post(`/courses/upload`, formData, config);
      dispatch({ type: ADD_UPLOAD_SUCCESS, payload: response.data });
      dispatch(setSnackbar(true, "success", "PlayList Saved Successfully"));
    } catch (error) {
      dispatch({ type: ADD_UPLOAD_FAILURE, payload: error });
      dispatch(setSnackbar(true, "error", "Error Saving PlayList"));
    }
  };

export const GetVideo = (value) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: GET_COURSE_REQUEST });
  try {
    const response = await Axios.get(`/course/get-videos`, value, config);
    console.log(response);
    dispatch({ type: GET_COURSE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_COURSE_FAILURE, payload: error });
  }
};

export const AddQuiz = (value) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: ADD_QUIZ_REQUEST });
  try {
    const response = await Axios.post(`/course/add-quiz`, value, config);
    dispatch({ type: ADD_QUIZ_SUCCESS, payload: response.data });
    dispatch(setSnackbar(true, "success", "Quiz Saved Successfully"));
  } catch (error) {
    dispatch({ type: ADD_QUIZ_FAILURE, payload: error });
    dispatch(setSnackbar(true, "error", "Error Saving Quiz "));
  }
};

export const AddSubscribe = (value) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: SUBSCRIBE_COURSE__REQUEST });
  try {
    const response = await Axios.post(`/users/subscribe`, value, config);
    dispatch({ type: SUBSCRIBE_COURSE__SUCCESS, payload: response.data });
    dispatch(setSnackbar(true, "success", "Subscribe Successfully"));
  } catch (error) {
    dispatch({ type: SUBSCRIBE_COURSE__FAILURE, payload: error });
    dispatch(setSnackbar(true, "error", "Error "));
  }
};

export const RemoveSubscribe = (value) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
    },
  };

  dispatch({ type: SUBSCRIBE_COURSE__REQUEST });
  try {
    const response = await Axios.post(`/users/unsubscribe`, value, config);
    dispatch({ type: SUBSCRIBE_COURSE__SUCCESS, payload: response.data });
    dispatch(setSnackbar(true, "success", "Unsubscribe Successfully"));
  } catch (error) {
    dispatch({ type: SUBSCRIBE_COURSE__FAILURE, payload: error });
    dispatch(setSnackbar(true, "error", "Error "));
  }
};

export const SearchByTitle = (value) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      sessionId: sessionStorage.getItem("sessionId"),
      title:value
    },
  };

  dispatch({ type: GET_COURSE_REQUEST });
  try {
    const response = await Axios.get(`/courses/by-title?userId=6541df204297384ef7b27f32`,config);
    dispatch({ type: GET_COURSE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_COURSE_FAILURE, payload: error });
    dispatch(setSnackbar(true, "error", "Error"));
  }
};