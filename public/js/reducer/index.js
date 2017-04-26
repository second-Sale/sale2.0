import { combineReducers } from 'redux';
import userExit from './isUserExit';
import login from './login'
export default combineReducers({
    userExit,
    login
});