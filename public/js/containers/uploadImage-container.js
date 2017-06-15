import React from 'react';
import Upload from '../components/UploadImage';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
    return {}
};


const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (text) => {
            dispatch({type: "UPLOAD_IMAGE", text})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload)