import {
  GET_TOKEN,
  GET_TOKEN_LOADING,
  GET_TOKEN_FAILED,
  GET_STATE_STORE,
  GET_API_TRIVIA,
} from './actionTypes';
import getCurrentToken from '../helpers/getCurrentToken';
import fetchApiTrivia from '../helpers/fetchApiTrivia';

const actionGetToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

const actionLoading = () => ({
  type: GET_TOKEN_LOADING,
});

const actionGetTokenFailed = () => ({
  type: GET_TOKEN_FAILED,
});

export const actionToStore = (payload) => ({
  type: GET_STATE_STORE,
  payload,
});

export const actionGetTokenWithThunk = () => (dispatch) => {
  dispatch(actionLoading());
  return getCurrentToken()
    .then(
      (payload) => dispatch(actionGetToken(payload)),
      () => dispatch(actionGetTokenFailed()),
    );
};

export const actionGetTrivia = (payload) => ({
  type: GET_API_TRIVIA,
  payload,
});

export const actionGetApiTriviaWithThunk = () => (dispatch) => {
  dispatch(actionLoading());
  const tokenTriviaStorage = localStorage.getItem('token');
  const trivia = JSON.parse(tokenTriviaStorage);
  return fetchApiTrivia(trivia)
    .then(
      (payload) => dispatch(actionGetTrivia(payload)),
      (error) => console.log(error),
    );
};
