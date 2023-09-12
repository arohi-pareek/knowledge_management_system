// src/store/index.js
import { createStore } from 'redux';
import rootReducer from './Reducer/rootReducer'; // Create this file

const store = createStore(rootReducer);

export default store;