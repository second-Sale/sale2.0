import React from 'react';
import Nav from '../containers/nav-container'


class Publish extends React.Component{
    render(){
        return <div>
            <Nav/>
            <div className="publishInput">
                <form>
                    <div className="input-group">
                        <span className="input-group-addon">名称：</span>
                        <input type="text" className="form-control"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">详细描述：</span>
                        <input type="text" className="form-control"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">价格：</span>
                        <input type="text" className="form-control"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">数量：</span>
                        <input type="text" className="form-control"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">联系方式：</span>
                        <input type="text" className="form-control"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">上传图片：</span>
                        <input type="file" className="form-control"/>
                    </div>
                    <br/>
                    <br/>
                    <button type="button" className="btn btn-info publishSubmit">确认</button>
                    <button type="reset" className="btn btn-info publishReset">取消</button>
                </form>
            </div>
        </div>
    }
}

export default Publish;