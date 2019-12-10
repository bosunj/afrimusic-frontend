import {
  GET_LYRIC,
  GET_LYRICS,
  ADD_LYRICS,
  LYRICS_LOADING,
} from '../actions/types';

const initialState = {
  lyric: null,
  lyrics: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LYRICS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LYRIC:
      return {
        ...state,
        lyric: action.payload,
        loading: false,
      };
    case GET_LYRICS:
      return {
        ...state,
        lyric: action.payload,
        loading: false,
      };
    case ADD_LYRICS:
      return {
        ...state,
        lyric: [action.payload, ...state.lyric],
      };
    default:
      return state;
  }
}
