import React from 'react';
import Nav from '../containers/nav-container'
import Footer from './footer'


class Publish extends React.Component{

    Publish(){
        var goodsName=this.refs.goodsName.value.trim();
        var goodsDescript=this.refs.goodsDescript.value.trim();
        var goodsPrice=this.refs.goodsPrice.value.trim();
        var goodsCount=this.refs.goodsCount.value.trim();
        var goodsContact=this.refs.goodsContact.value.trim();
        var user=this.props.user;
        this.props.publish({user,goodsName,goodsDescript,goodsPrice,goodsCount,goodsContact});
    }

    render(){
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
                    <div className="input-group">
                        <span className="input-group-addon">上传图片：</span>
                        <input type="file" className="form-control"/>
                    </div>
                    <br/>
                    <input type="file" className=""/>
                    <br/>
                    <button type="button" className="btn btn-info publishSubmit" onClick={this.Publish.bind(this)}>确认</button>
                    <button type="reset" className="btn btn-info publishReset">取消</button>
                </form>
            </div>
            <Footer/>
        </div>
    }
}

export default Publish;