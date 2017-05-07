import React from 'react';
import Nav from '../components/nav';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
    console.log("stste;", state);
    return {
        isLogin: state.login.isLogin,
        user:state.login.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        isUserLogin: (text)=> {
            dispatch({type: "IS_USER_LOGIN", text})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);