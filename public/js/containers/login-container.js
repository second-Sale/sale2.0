import React from 'react';
import Login from '../components/login';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
    return{
        checkUser:state.login.checkUser
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        loginUser :(text)=>{
            dispatch({type:"LOGIN_USER",text});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);