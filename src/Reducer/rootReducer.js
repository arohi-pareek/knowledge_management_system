import { combineReducers } from 'redux';
import { subscribeReducer } from './Subscribe';

const rootReducer = combineReducers({
  subReducer: subscribeReducer,
});

export default rootReducer;