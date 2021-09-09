import {
  GET_TRIVIA_LOADING,
  GET_TRIVIA_FAILED,
  GET_TRIVIA,
  GET_INDEX_QUESTION,
  SHUFFLE,
} from '../actions/actionTypes';

import shuffleAnswers from '../helpers/shuffleAnswers';

const INITIAL_STATE = {
  allQuestions: [],
  isLoading: true,
  erro: null,
  indexQuestion: 0,
  shuffleQuestions: [],
};

const reducerTrivia = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TRIVIA_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case GET_TRIVIA_FAILED:
    return {
      ...state,
      erro: action.payload.response_code,
    };
  case GET_TRIVIA:
    console.log(action.payload);
    return {
      ...state,
      allQuestions: action.payload,
      isLoading: false,
    };
  case GET_INDEX_QUESTION:
    return {
      ...state,
      indexQuestion: state.indexQuestion + 1,
    };
  case SHUFFLE:
    return {
      ...state,
      shuffleQuestions: shuffleAnswers(action.array),
    };
  default:
    return {
      ...state,
    };
  }
};
export default reducerTrivia;
