
import { GET_COURSE_FAILURE, GET_COURSE_REQUEST, GET_COURSE_SUCCESS } from "../Constant/ActionTypes";

const courseData = {
  loading: false,
  error: "",
  CourseData: [],
};

export const AddCourse = (state = courseData, action) => {
  switch (action.type) {
    case GET_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        CourseData: action.payload,
      };
    case GET_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
