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
  GET_QUIZ_FAILURE,
  GET_QUIZ_REQUEST,
  GET_QUIZ_SUCCESS,
  GET_VIDEO_FAILURE,
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
} from "../Constant/ActionTypes";

const courseData = {
  loading: false,
  error: "",
  CourseData: [],
};

const chapterData = {
  loading: false,
  error: "",
  ChapterData: [],
};

const playListData = {
  loading: false,
  error: "",
  PlayListData: [],
};

const quizData = {
  loading: false,
  error: "",
  QuizData: [],
};

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

export const ChapterDetails = (state = chapterData, action) => {
  const deletedCourseId = action.payload; // Assuming action.payload contains the deleted course ID.

  // Find the index of the deleted course in the CourseData array.
  const updatedCourseData = state.ChapterData.filter(
    (course) => course.id !== deletedCourseId
  );
  switch (action.type) {
    // ---------------------- ADD Chapter

    case ADD_CHAPTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CHAPTER_SUCCESS:
      return {
        ...state,
        loading: false,
        ChapterData: [...state.ChapterData, action.payload],
      };
    case ADD_CHAPTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // --------------------------- GET chapter

    case GET_CHAPTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CHAPTER_SUCCESS:
      return {
        ...state,
        loading: false,
        ChapterData: [...state.ChapterData,action.payload],
      };
    case GET_CHAPTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // ---------------------- DELETE Course

    // case DELETE_COURSE_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case DELETE_COURSE_SUCCESS:
    //   const updatedCourseData = state.CourseData.filter(
    //     (course) => course.id !== action.payload.deletedCourseId
    //   );
    //   return {
    //     ...state,
    //     loading: false,
    //     CourseData: updatedCourseData,
    //   };
    // case DELETE_COURSE_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    // ........................ IF EDIT DETAILS

    default:
      return state;
  }
};


export const PlayListDetails = (state = playListData, action) => {
  const deletedCourseId = action.payload; // Assuming action.payload contains the deleted course ID.

  // Find the index of the deleted course in the CourseData array.
  const updatedCourseData = state.PlayListData.filter(
    (course) => course.id !== deletedCourseId
  );
  switch (action.type) {
    // ---------------------- ADD Chapter

    case ADD_UPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        PlayListData: [...state.ChapterData, action.payload],
      };
    case ADD_UPLOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // --------------------------- GET video

    case GET_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        PlayListData: [...state.ChapterData,action.payload],
      };
    case GET_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // ---------------------- DELETE Course

    // case DELETE_COURSE_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case DELETE_COURSE_SUCCESS:
    //   const updatedCourseData = state.CourseData.filter(
    //     (course) => course.id !== action.payload.deletedCourseId
    //   );
    //   return {
    //     ...state,
    //     loading: false,
    //     CourseData: updatedCourseData,
    //   };
    // case DELETE_COURSE_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    // ........................ IF EDIT DETAILS

    default:
      return state;
  }
};

export const QuizDetails = (state = quizData, action) => {

  switch (action.type) {
    // ---------------------- ADD Quiz

    case ADD_QUIZ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        QuizData: [...state.QuizData, action.payload],
      };
    case ADD_QUIZ_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // --------------------------- GET Quiz

    case GET_QUIZ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        QuizData: [...state.QuizData,action.payload],
      };
    case GET_QUIZ_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
