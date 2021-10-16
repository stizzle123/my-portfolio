import { combineReducers } from "redux";
import imagesReducer from "../features/images/imageSlice";
import titleReducer from "../features/title/titleSlice";

const rootReducer = combineReducers({
  images: imagesReducer,
  title: titleReducer,
});

export default rootReducer;
