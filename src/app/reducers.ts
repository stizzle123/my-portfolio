import { combineReducers } from "redux";
import titleReducer from "../features/title/titleSlice";

const rootReducer = combineReducers({
  title: titleReducer,
});

export default rootReducer;
