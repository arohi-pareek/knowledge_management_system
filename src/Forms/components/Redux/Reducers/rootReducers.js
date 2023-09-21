import { combineReducers } from "redux";
import { createAccount } from "./rootReduceOne";

const RootReducer = combineReducers({
    createAccount: createAccount,  
  });

  export default RootReducer