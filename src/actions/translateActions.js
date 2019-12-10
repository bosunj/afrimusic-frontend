import axios from 'axios';

import {
  ADD_TRANSLATION,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_TRANSLATION,
  GET_TRANSLATIONS,
  TRANSLATION_LOADING,
} from './types';

// Add Translation
export const addTranslation = translateData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/translate', translateData)
    .then(res =>
      dispatch({
        type: ADD_TRANSLATION,
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

// Get Translation
export const getTranslation = () => dispatch => {
  dispatch(setTranslationLoading());
  axios
    .get('/translate')
    .then(res =>
      dispatch({
        type: GET_TRANSLATION,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRANSLATION,
        payload: null,
      })
    );
};

// Get Song by id
export const getTranslations = id => dispatch => {
  dispatch(setTranslationLoading());
  axios
    .get(`/translate/${id}`)
    .then(res =>
      dispatch({
        type: GET_TRANSLATIONS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRANSLATIONS,
        payload: null,
      })
    );
};

// Set loading state
export const setTranslationLoading = () => {
  return {
    type: TRANSLATION_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
