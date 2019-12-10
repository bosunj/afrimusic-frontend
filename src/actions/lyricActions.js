import axios from 'axios';

import {
  ADD_LYRICS,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_LYRIC,
  GET_LYRICS,
  LYRIC_LOADING,
} from './types';

// Add Lyric
export const addLyric = lyricData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/lyrics', lyricData)
    .then(res =>
      dispatch({
        type: ADD_LYRICS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Get Lyric
export const getLyric = () => dispatch => {
  dispatch(setLyricLoading());
  axios
    .get('/lyrics')
    .then(res =>
      dispatch({
        type: GET_LYRICS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_LYRICS,
        payload: null,
      })
    );
};

// Get Song by id
export const getLyrics = id => dispatch => {
  dispatch(setLyricLoading());
  axios
    .get(`/lyrics/${id}`)
    .then(res =>
      dispatch({
        type: GET_LYRIC,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_LYRIC,
        payload: null,
      })
    );
};

// Set loading state
export const setLyricLoading = () => {
  return {
    type: LYRIC_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
