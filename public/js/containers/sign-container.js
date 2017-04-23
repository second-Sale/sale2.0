import React from 'react';
import Sign from '../components/sign';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        onInsertUser: (text) => {
            dispatch({type: "REGIST", text})
        },
        isUserExit: (text) => {
            dispatch({type: "ISUSEREXIT",text})
        }
    }
};

export default connect(()=> {
    return {}
}, mapDispatchToProps)(Sign)