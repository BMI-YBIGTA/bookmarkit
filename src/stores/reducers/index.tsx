import { combineReducers } from "redux";
import alert from "./alert";
import userReducer from "./userReducer";

const reducers = combineReducers({
  userReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
