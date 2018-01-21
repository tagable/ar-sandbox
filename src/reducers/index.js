import { combineReducers } from 'redux';
import user from './user';
import coder from './coder';

export default combineReducers({
    user,
    coderList: coder
});