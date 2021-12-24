import { AnyAction } from 'redux';
import { SIGNIN_USER, SIGNUP_USER, LOGOUT_USER } from '../actions/userAction';

export type UserState = {
  email: string;
  password: string;
  nickname: string;
  token: string;
};

const initialState: UserState = {
  email: '',
  password: '',
  nickname: '',
  token: '',
};

export default function (state: UserState = initialState, action: AnyAction) {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        nickname: action.payload.name,
      };
    case SIGNUP_USER:
      return { ...state, success: action.payload };
    case LOGOUT_USER:
      return { ...state };
    default:
      return state;
  }
}
