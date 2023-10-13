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
} from "../Constant/ActionTypes";

const courseData = {
  loading: false,
  error: "",
  CourseData: [],
};

// export const AddCourse = (state = courseData, action) => {
//   switch (action.type) {
//     case ADD_COURSE_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case ADD_COURSE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         CourseData: action.payload,
//       };
//     case ADD_COURSE_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// // Get Course

// export const GetCourse = (state = courseData, action) => {
//   switch (action.type) {
//     case GET_COURSE_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case GET_COURSE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         CourseData: action.payload,
//       };
//     case GET_COURSE_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// // Delete Course

// export const DeleteCourse = (state = courseData, action) => {
//   switch (action.type) {
//     case DELETE_COURSE_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case DELETE_COURSE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         CourseData: action.payload,
//       };
//     case DELETE_COURSE_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

export const CourseDetails = (state = courseData, action) => {
  const deletedCourseId = action.payload; // Assuming action.payload contains the deleted course ID.

  // Find the index of the deleted course in the CourseData array.
  const updatedCourseData = state.CourseData.filter(
    (course) => course.id !== deletedCourseId
  );
  switch (action.type) {
    // ---------------------- ADD Course

    case ADD_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        CourseData: [...state.CourseData, action.payload],
      };
    case ADD_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // --------------------------- Course GET

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

    // ---------------------- DELETE Course

    case DELETE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COURSE_SUCCESS:
      const updatedCourseData = state.CourseData.filter(
        (course) => course.id !== action.payload.deletedCourseId
      );
      return {
        ...state,
        loading: false,
        CourseData: updatedCourseData,
      };
    case DELETE_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // ........................ IF EDIT DETAILS

    default:
      return state;
  }
};
