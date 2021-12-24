import { AnyAction } from 'redux';

export type AlertState = {
  load: string;
  dateerror: string;
};

const initialState: AlertState = {
  load: 'true',
  dateerror: 'dataerr',
};

const alert = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        load: action.payload,
      };
    case 'SET_DATE_ERROR':
      return {
        ...state,
        dateerror: action.payload,
      };
    default:
      return state;
  }
};

export default alert;
