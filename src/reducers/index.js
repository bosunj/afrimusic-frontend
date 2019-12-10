import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import lyricReducer from './lyricReducer';
import postReducer from './postReducer';
import songReducer from './songReducer';
import translateReducer from './translateReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  lyric: lyricReducer,
  post: postReducer,
  song: songReducer,
  translate: translateReducer,
});
