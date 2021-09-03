import {
  GET_TOKEN,
  GET_TOKEN_LOADING,
  GET_TOKEN_FAILED,
  GET_STATE_STORE,
} from './actionTypes';
import getCurrentToken from '../helpers/getCurrentToken';

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
