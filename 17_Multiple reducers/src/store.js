import { createStore, combineReducers } from "redux";
// Import your reducer functions here
import { timerReducer } from "./redux/reducers/timerReducer";
import { counterReducer } from "./redux/reducers/counterReducer";

// Combine the reducer functions
const rootReducer = combineReducers({
  counter: counterReducer,
  timer: timerReducer,
});

// Create the Redux store
export const store = createStore(rootReducer);
