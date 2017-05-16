import { combineReducers } from 'redux';
import userExit from './isUserExit';
import login from './login';
import goods from './getAllGoods'

export default combineReducers({
    userExit,
    login,
    goods
});