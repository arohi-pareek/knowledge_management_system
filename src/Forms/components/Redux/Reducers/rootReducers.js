import { combineReducers } from "redux";
import setSnackBar from "./snackbarReducer";
import subscribe from "./SubscribeReducer";
import { CourseDetails ,PlayListDetails} from "./rootReduceOne";
import { ChapterDetails } from "./rootReduceOne";


const RootReducer = combineReducers({

  snackbar: setSnackBar,
  subscribe: subscribe,
  CourseDetails:CourseDetails,
  ChapterDetails:ChapterDetails,
  PlayListDetails : PlayListDetails
});

export default RootReducer;
