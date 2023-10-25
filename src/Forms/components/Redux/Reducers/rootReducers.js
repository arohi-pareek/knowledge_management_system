import { combineReducers } from "redux";
import setSnackBar from "./snackbarReducer";
import subscribe from "./SubscribeReducer";
import { CourseDetails ,PlayListDetails,QuizDetails ,ChapterDetails} from "./rootReduceOne";


const RootReducer = combineReducers({

  snackbar: setSnackBar,
  subscribe: subscribe,
  CourseDetails:CourseDetails,
  ChapterDetails:ChapterDetails,
  PlayListDetails : PlayListDetails,
  QuizDetails:QuizDetails
});

export default RootReducer;
