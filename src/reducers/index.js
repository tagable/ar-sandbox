import { combineReducers } from 'redux';
import user from './user';
import coders, {coder} from './coder';

export default combineReducers({
    user,
    coderList: coders,
    coder
});