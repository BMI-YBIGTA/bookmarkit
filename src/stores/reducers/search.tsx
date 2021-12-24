import { AnyAction } from "redux";

export type SearchState = {
  load: string;
};

const initialState: SearchState = {
  load: "",
};

const search = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        load: action.payload,
      };
    default:
      return state;
  }
};

export default search;
