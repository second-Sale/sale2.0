import React from 'react';
import Nav from '../containers/nav-container'
import Footer from './footer'
import {browserHistory} from 'react-router'
import UploadImage from '../containers/uploadImage-container';


class Publish extends React.Component {

    Publish() {
        var goodsName = this.refs.goodsName.value.trim();
        var goodsDescript = this.refs.goodsDescript.value.trim();
        var goodsPrice = this.refs.goodsPrice.value.trim();
        var goodsCount = this.refs.goodsCount.value.trim();
        var goodsContact = this.refs.goodsContact.value.trim();

        var picture  = this.props.image;

        // alert(image);

        // var picture = document.getElementById('upload').files[0];
        // console.log("picture: ", picture)

        var user = this.props.user;

        if (goodsName === '' || goodsContact === '' || goodsCount === '' || goodsDescript === '' || goodsPrice === '') {
            document.getElementById('warning').innerHTML = "请填写完整信息";
        } else {
            this.props.publish({user, goodsName, goodsDescript, goodsPrice, goodsCount, goodsContact, picture});
            document.getElementById('warning').innerHTML = '';
            browserHistory.push('/');
        }

    }

    render() {
        return <div>
            <Nav/>
            <div className="publishInput">
                <form>
                    <div className="input-group">
                        <span className="input-group-addon">名称：</span>
                        <input type="text" className="form-control" ref="goodsName"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">详细描述：</span>
                        <input type="text" className="form-control" ref="goodsDescript"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">价格：</span>
                        <input type="text" className="form-control" ref="goodsPrice"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">数量：</span>
                        <input type="text" className="form-control" ref="goodsCount"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">联系方式：</span>
                        <input type="text" className="form-control" ref="goodsContact"/>
                    </div>
                    <br/>
                    <UploadImage/>
                    <br/>
                    <br/>
                    <div id="warning"><span id="warn">提示</span></div>
                    <button type="button" className="btn btn-info publishSubmit" onClick={this.Publish.bind(this)}>确认
                    </button>
                    <button type="reset" className="btn btn-info publishReset">取消</button>
                </form>
            </div>
            <Footer/>
        </div>
    }
}

export default Publish;