import {combineReducers} from 'redux';
import userExit from './isUserExit';
import login from './login';
import goods from './getAllGoods';
import upload from './uploadImage'

export default combineReducers({
    userExit,
    login,
    goods,
    upload
});