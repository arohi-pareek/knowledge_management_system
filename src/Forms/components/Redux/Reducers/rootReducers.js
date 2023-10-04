import { combineReducers } from "redux";
import setSnackBar from "./snackbarReducer";
import subscribe from "./SubscribeReducer";
import { CourseDetails } from "./rootReduceOne";


const RootReducer = combineReducers({

  snackbar: setSnackBar,
  subscribe: subscribe,
  CourseDetails:CourseDetails
});

export default RootReducer;
