import axios from 'axios';

import {
  ADD_SONG,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_SONGS,
  GET_SONG,
  SONG_LOADING,
} from './types';

// Add Song
export const addSong = songData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/song', songData)
    .then(res =>
      dispatch({
        type: ADD_SONG,
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

// Get Song
export const getSongs = () => dispatch => {
  dispatch(setSongLoading());
  axios
    .get('/song')
    .then(res =>
      dispatch({
        type: GET_SONGS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SONGS,
        payload: null,
      })
    );
};

// Get Song by id
export const getSong = id => dispatch => {
  dispatch(setSongLoading());
  axios
    .get(`/song/${id}`)
    .then(res =>
      dispatch({
        type: GET_SONG,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SONG,
        payload: null,
      })
    );
};

// Set loading state
export const setSongLoading = () => {
  return {
    type: SONG_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
