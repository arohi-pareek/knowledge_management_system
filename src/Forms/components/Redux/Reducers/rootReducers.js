import { combineReducers } from "redux";
import { createAccount } from "./rootReduceOne";
import setSnackBar from "./snackbarReducer";
import subscribe from "./SubscribeReducer";

const RootReducer = combineReducers({
  createAccount: createAccount,
  snackbar: setSnackBar,
  subscribe: subscribe,
});

export default RootReducer;
