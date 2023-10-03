import { combineReducers } from "redux";
import { AddCourse } from "./rootReduceOne";
import setSnackBar from "./snackbarReducer";
import subscribe from "./SubscribeReducer";

const RootReducer = combineReducers({
  AddCourse: AddCourse,
  snackbar: setSnackBar,
  subscribe: subscribe,
});

export default RootReducer;
