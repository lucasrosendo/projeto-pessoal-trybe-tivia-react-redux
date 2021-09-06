import {
  GET_TOKEN,
  GET_TOKEN_LOADING,
  GET_TOKEN_FAILED,
  GET_STATE_STORE,
  GET_API_TRIVIA,
  CHANGE_INDEX,
  CHANGE_CURRENT_QUESTION,
} from './actionTypes';
import getCurrentToken from '../helpers/getCurrentToken';
import fetchApiTrivia from '../helpers/fetchApiTrivia';

const actionGetToken = (payload) => ({ type: GET_TOKEN, payload });

const actionLoading = () => ({ type: GET_TOKEN_LOADING });

const actionGetTokenFailed = () => ({ type: GET_TOKEN_FAILED });

export const actionToStore = (payload) => ({ type: GET_STATE_STORE, payload });

export const actionChangeIndex = () => ({ type: CHANGE_INDEX });

export const actionChangeCurrentQuestion = () => ({ type: CHANGE_CURRENT_QUESTION });

export const actionGetTrivia = (payload) => ({ type: GET_API_TRIVIA, payload });

export const actionGetTokenWithThunk = () => (dispatch) => {
  dispatch(actionLoading());
  return getCurrentToken()
    .then(
      (payload) => dispatch(actionGetToken(payload)),
      () => dispatch(actionGetTokenFailed()),
    );
};

export const actionGetApiTriviaWithThunk = () => (dispatch) => {
  const tokenTriviaStorage = localStorage.getItem('token');
  const trivia = JSON.parse(tokenTriviaStorage);
  return fetchApiTrivia(trivia)
    .then(
      (payload) => dispatch(actionGetTrivia(payload)),
      (error) => console.log(error),
    );
};
