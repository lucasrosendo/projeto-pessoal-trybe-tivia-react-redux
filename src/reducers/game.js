import { GET_TOKEN_LOADING, GET_API_TRIVIA } from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: true,
  allQuestions: [],
};

const reducerGame = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case GET_API_TRIVIA:
    return {
      ...state,
      isLoading: false,
      allQuestions: action.payload,
    };
  default:
    return state;
  }
};

export default reducerGame;
