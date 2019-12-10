import {
  GET_TRANSLATION,
  GET_TRANSLATIONS,
  ADD_TRANSLATION,
  TRANSLATION_LOADING,
} from '../actions/types';

const initialState = {
  translation: null,
  translations: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TRANSLATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TRANSLATION:
      return {
        ...state,
        translation: action.payload,
        loading: false,
      };
    case GET_TRANSLATIONS:
      return {
        ...state,
        translations: action.payload,
        loading: false,
      };
    case ADD_TRANSLATION:
      return {
        ...state,
        translation: [action.payload, ...state.translation],
      };
    default:
      return state;
  }
}
