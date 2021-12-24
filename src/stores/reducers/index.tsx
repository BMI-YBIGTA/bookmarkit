import { combineReducers } from "redux";
import search from "./search";
import userReducer from "./userReducer";
import category from "./category";

const reducers = combineReducers({
  userReducer,
  search,
  category,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
