import React from "react";
import {browserHistory} from 'react-router'

class Nav extends React.Component {
    Login() {
        browserHistory.push("/login")
    }

    Sign() {
        browserHistory.push('/sign')
    }

    render() {
        return <div id="navStyle">
            <span onClick={this.Login.bind(this)} className="navButton">登录</span>
            <span onClick={this.Sign.bind(this)} className="navButton2">注册</span>
        </div>
    }
}

export default Nav;