import { AnyAction } from "redux";

export type CategoryState = {
  load: string;
};

const initialState: CategoryState = {
  load: "",
};

const category = (state: CategoryState = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        load: action.payload,
      };
    default:
      return state;
  }
};

export default category;
