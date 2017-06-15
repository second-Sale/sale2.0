import React from 'react';
import request from 'superagent'

class UploadImage extends React.Component {

    upload() {
        // var formData = new FormData($('#file')[0].files[0]);
        // console.log("Image", formData);

        var formData = new FormData($("#frmUploadFile")[0]);

        console.log(formData);

        request.post('/upload')
            .send(formData)
            .end((err, res)=> {
                this.props.uploadImage(res.body.filepath)
            })
    }

    render() {
        return <div>

            <form className="form-horizontal" encType='multipart/form-data' method='post' action='javascript:;'
                  role="form"
                  id="frmUploadFile">
                <div className="input-group">
                    <span className="input-group-addon">上传图片：</span>
                    <input type="file" name="files" className="form-control" onChange={this.upload.bind(this)}/>
                </div>
            </form>
        </div>
    }
}

export default UploadImage;