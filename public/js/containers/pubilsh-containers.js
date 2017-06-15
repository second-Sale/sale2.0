import React from 'react';
import Publish from '../components/publish';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
    console.log("pul-con,", state.upload.image);
    return {
        // checkUser: state.login.checkUser111
        user: state.login.user,
        image: state.upload.image
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        publish: (text)=> {
            console.log("container: ", text);
            dispatch({type: "PUBLISH_GOODS", text});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish);