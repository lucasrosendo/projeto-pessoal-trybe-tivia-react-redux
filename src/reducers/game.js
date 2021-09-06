import {
  GET_TOKEN_LOADING,
  GET_API_TRIVIA,
  CHANGE_INDEX,
  CHANGE_CURRENT_QUESTION,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: true,
  indexQuestion: 0,
  allQuestions: [],
  currentQuestion: null,
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
      allQuestions: action.payload,
      currentQuestion: action.payload[state.indexQuestion],
      isLoading: false,
    };
  case CHANGE_INDEX:
    return {
      ...state,
      isLoading: true,
      indexQuestion: state.indexQuestion + 1,
    };
  case CHANGE_CURRENT_QUESTION:
    return {
      ...state,
      currentQuestion: state.allQuestions[state.indexQuestion],
      isLoading: false,
    };
  default:
    return state;
  }
};

export default reducerGame;
