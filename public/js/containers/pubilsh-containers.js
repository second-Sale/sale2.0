import React from 'react';
import Publish from '../components/publish';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
    return {
        // checkUser: state.login.checkUser
        user:state.login.user
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        publish:(text)=>{
            dispatch({type:"PUBLISH_GOODS",text});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish);