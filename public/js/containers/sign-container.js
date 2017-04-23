import React from 'react';
import Sign from '../components/sign';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    console.log("state:",state.userExit);
    return {
        userExit: state.userExit
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInsertUser: (text) => {
            dispatch({type: "REGIST", text})
        },
        isUserExit: (name) => {
            dispatch({type: "ISUSEREXIT",name})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sign)