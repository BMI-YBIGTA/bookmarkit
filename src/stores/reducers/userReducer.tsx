import { AnyAction } from 'redux';
import { SIGNIN_USER, SIGNUP_USER, LOGOUT_USER } from '../actions/userAction';

export type UserState = {
  loggedIn: boolean;
};

const initialState: UserState = {
  loggedIn: false,
};

export default function (state: UserState = initialState, action: AnyAction) {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state,
        loggedIn: true,
      };
    case SIGNUP_USER:
      return { ...state, loggedIn: true };
    case LOGOUT_USER:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
