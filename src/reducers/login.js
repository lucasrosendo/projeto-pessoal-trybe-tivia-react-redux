import {
  GET_TOKEN,
  GET_TOKEN_LOADING,
  GET_TOKEN_FAILED,
  GET_STATE_STORE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  token: '',
  name: 'Player',
  login: '',
  isLoading: false,
  erro: null,
};

const reducerLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_STATE_STORE:
    return {
      ...state,
      name: action.payload.name,
      login: action.payload.login,
    };
  case GET_TOKEN_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case GET_TOKEN_FAILED:
    return {
      ...state,
      isLoading: false,
      erro: action.payload.response_message,
    };
  case GET_TOKEN:
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
    };
  default:
    return state;
  }
};

export default reducerLogin;
