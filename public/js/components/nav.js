import React from "react";
import {browserHistory} from 'react-router'

class Nav extends React.Component {
    Login() {
        browserHistory.push("/login")
    }

    Sign() {
        browserHistory.push('/sign')
    }

    Publish() {
        var Cookies = {};
        document.cookie.split(';').forEach(function (Cookie) {
            var parts = Cookie.split('=');
            Cookies[parts[0].trim()] = ( parts[1] || '' ).trim();
        });

        if (Cookies.user && this.props.isLogin === true) {
            browserHistory.push("/publish")
        } else {
            browserHistory.push("/login")
        }
    }

    LoginOut() {
        this.props.logOutUser();
        browserHistory.push("/");
    }

    Home() {
        browserHistory.push("/")
    }

    Person() {
        // browserHistory.push("/person")
    }

    render() {
        return <div id="navStyle">

            <span onClick={this.Home.bind(this)} className="homeButton">首页</span>
            <span onClick={this.Publish.bind(this)} className="publishButton">发布信息</span>
            <span onClick={this.Person.bind(this)} className="personButton">个人中心</span>

            <div className={this.props.isLogin === false ? "" : "hidden" } id="navButton">
                <span onClick={this.Login.bind(this)} className="">登录</span>
                <span onClick={this.Sign.bind(this)} className="navButton2">注册</span>
            </div>

            <div className={this.props.isLogin === false ? "hidden" : "" } id="navButton">
                <span className="navButton3">{this.props.user},你好！</span>
                <span onClick={this.LoginOut.bind(this)} className="navButton2">登出</span>
            </div>
        </div>
    }
}

export default Nav;