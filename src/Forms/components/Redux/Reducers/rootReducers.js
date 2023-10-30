import { combineReducers } from "redux";
import setSnackBar from "./snackbarReducer";
import subscribe from "./SubscribeReducer";
import {
  CourseDetails,
  PlayListDetails,
  QuizDetails,
  ChapterDetails,
} from "./rootReduceOne";
import searchReducer from "./searchReducer";
import filterReducer from "./filterReducer";

const RootReducer = combineReducers({
  snackbar: setSnackBar,
  subscribe: subscribe,
  CourseDetails: CourseDetails,
  ChapterDetails: ChapterDetails,
  PlayListDetails: PlayListDetails,
  QuizDetails: QuizDetails,
  searchReducer: searchReducer,
  filterReducer:filterReducer
});

export default RootReducer;
