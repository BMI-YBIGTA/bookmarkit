import { combineReducers } from "redux";
import search from "./search";
import userReducer from "./userReducer";

const reducers = combineReducers({
  userReducer,
  search,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
