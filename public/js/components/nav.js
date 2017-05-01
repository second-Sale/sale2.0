import React from "react";
import {browserHistory} from 'react-router'

class Nav extends React.Component {
    Login() {
        browserHistory.push("/login")
    }

    Sign() {
        browserHistory.push('/sign')
    }

    Publish(){
        browserHistory.push("/publish")
    }

    render() {
        return <div id="navStyle">
            <span onClick={this.Publish.bind(this)} className="publishButton">发布信息</span>
            <span onClick={this.Login.bind(this)} className="navButton">登录</span>
            <span onClick={this.Sign.bind(this)} className="navButton2">注册</span>
        </div>
    }
}

export default Nav;