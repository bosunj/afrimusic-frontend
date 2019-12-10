import {GET_SONG, GET_SONGS, ADD_SONG, SONG_LOADING} from '../actions/types';

const initialState = {
  song: null,
  songs: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SONG_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SONG:
      return {
        ...state,
        song: action.payload,
        loading: false,
      };
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
        loading: false,
      };
    case ADD_SONG:
      return {
        ...state,
        songs: [action.payload, ...state.songs],
      };
    default:
      return state;
  }
}
